'use strict';

const Controller = require('egg').Controller;
const aliyun = require('aliyun-sdk');
class HomeController extends Controller {
  async index() {
    await this.app.postLogger();
  }
}

module.exports = HomeController;
