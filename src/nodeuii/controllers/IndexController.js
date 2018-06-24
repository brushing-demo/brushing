
import {route, GET, POST, before} from 'awilix-koa';
import {createBundleRenderer} from 'vue-server-renderer';
import path from 'path';
import fs from 'fs';
import LRU from 'lru-cache';

@route('/')
@route('/brushingList')
@route('/addTopics')
@route('/test')
export default class IndexController {

  constructor({indexService}) {
    this.indexService = indexService;

    this.metaDictionaries = {
      "index": {
        title: 'vue-ssr-demo',
        meta: '<meta name="keywords" content="vue-ssr-demo">'
      }
    }
  }

  createRenderer(serverbundle, template, clientManifest) {
    return createBundleRenderer(serverbundle, {
      cache: LRU({
        max: 10000
      }),
      runInNewContext: false,
      template,
      clientManifest
    });
  }

  @GET()
  async getIndex(ctx) {
    const rootPath = path.join(__dirname, '..');
    const serverBundle = require('../assets/vue-ssr-server-bundle.json');
    const clientManifest = require('../assets/vue-ssr-client-manifest.json');
    const template = fs.readFileSync(rootPath + '/assets/index.html', 'utf-8');
    const context = { url: ctx.url };
    const ssrrender = this.createRenderer(serverBundle, template, clientManifest);

    function createSsrStreamPromise() {
      return new Promise((resolve, reject) => {
        if (!ssrrender) {
          return ctx.body = 'waiting for compilation.. refresh in a moment.'
        }
        const ssrStream = ssrrender.renderToStream(context);
        ctx.status = 200;
        ctx.type = 'html';
        ssrStream.on('error', err =>{reject(err)}).pipe(ctx.res);
      });
    }
    await createSsrStreamPromise(context);
  }

}