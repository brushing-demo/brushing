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
    constructor(app) {}

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
        const options = {
            method: "POST",
            url: constance.API_URL + "/exam/question/add",
            headers: {
                "content-type": "application/x-www-form-urlencoded:charset=UTF-8"
            },
            data: qs.stringify(data)
        };
        console.log(options);
        const result = axios(options)
            .then(res => {
                console.log("11111111111111", res.data);
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
}