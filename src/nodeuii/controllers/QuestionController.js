import { route, GET, POST, before } from "awilix-koa";
import  qs  from "qs";

@route("/exam/question")
export default class QuestionController {
  constructor({ questionService }) {
    this.questionService = questionService;
  }

  @POST()
  @route("/add")
  async add(ctx, next) {
    const result = await this.questionService.addQuestion(ctx.request.body);
    ctx.body = result;
  }

  @POST()
  @route("/")
  async list(ctx, next){
    const result = await this.questionService.list(ctx.request.body);
    ctx.body = result;
  }
}