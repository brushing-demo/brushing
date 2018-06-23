import {route, GET, POST, before} from 'awilix-koa';

@route('/tests')
export default class TestController {
    constructor({ testService }){
        this.testService = testService;
    }

    @GET()
    @route("/hahaha")
    async getData(ctx) {
        const result = await this.testService.getQQ();
        // ctx.status = 200;
        // ctx.type = "json";
        ctx.body = result;
    }
}