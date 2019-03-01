/* eslint-disable no-useless-concat */
'use strict';
const aliyun = require('aliyun-sdk');
module.exports = {
  async postLogger() {
    const sls = new aliyun.SLS({
      // 在阿里云OSS申请的 accessKeyId
      accessKeyId: ,

      // 在阿里云OSS申请的 secretAccessKey
      secretAccessKey: ,

      // sts token 中的 securityToken
      // securityToken: "",

      // 根据你的 sls project所在地区选择填入
      endpoint: 'http://cn-qingdao.log.aliyuncs.com',

      // 这是 sls sdk 目前支持最新的 api 版本, 不需要修改
      apiVersion: '2015-06-01',

      // 以下是可选配置
      // ,httpOptions: {
      //    timeout: 1000  //1sec, 默认没有timeout
      // }
    });
    const logGroup = {
      logs: [{
        time: Math.floor(new Date().getTime() / 1000),
        contents: [{
          key: 'latency',
          value: Math.random().toFixed(3),
        }, {
          key: 'uri',
          value: 'uri',
        }, {
          key: 'status',
          value: '200',
        }],
      }],
      topic: '',
      source: '127.0.0.1',/*  */
    };
    sls.putLogs({
      projectName: 'oemp',
      logStoreName: 'oepm_server',
      logGroup,
    }, function(err, data) {

      if (err) {
        console.log('error:', err);
        return;
      }

      console.log('success:', data);

    });
  },
};
