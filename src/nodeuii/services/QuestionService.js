import axios from "axios";
import qs from "qs";
import constance from "../constance";

/**
 * @fileOverview 实现question数据模型
 * @author bounlusin@163.com
 */

/**
 * @description
 * @class QuestionService
 */
export default class QuestionService {
  /**
   * @constructor
   * @param{string}app  koa2上下文环境
   */
  constructor(app) {
  }

  /**
   * 添加题目
   * @param data 请求参数
   * @returns res 返回结果，json格式
   * {
                'result':{
                'uid':123,//当前用户id，数字
                'qid':123,//题目id，数字
                },
                'status':0,     //选项id，数字。处理成功为0
                'msg':'状态描述' //字符串，UrlEncode编码
                }
   */
  async addQuestion(data) {
    console.log("service", data);
    console.log(constance);
    const result = axios
        .post(constance.API_URL + "/exam/question/add", data)
        .then(res => {
          return res.data;
        })
        .catch(error => {
          console.log(error);
          return {
            error: true
          };
        });

    return result;
  }

  /**
   * 查询题目列表
   * @param data 请求参数
   * @returns res 返回结果，json格式
   * {
                'result':{
                'uid':123,//当前用户id，数字
                'qid':123,//题目id，数字
                'list':[{},{},{}],
                },
                'status':0,     //选项id，数字。处理成功为0
                'msg':'状态描述' //字符串，UrlEncode编码
                }
   */
  async list(data) {
    console.log("service", data);
    console.log(constance);
    const result = axios
        .post(constance.API_URL + "/exam/question/list", data)
        .then(res => {
          return res.data;
        })
        .catch(error => {
          console.log(error);
          return {
            msg: '',
            result: {},
            status: -1
          };
        });

    return result;
  }
}