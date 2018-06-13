"use strict";

var _redux = require("@tarojs/redux");

var _nervRedux = require("nerv-redux");

var ENV_TYPE = {
  WEAPP: "WEAPP",
  WEB: "WEB",
  RN: "RN"
};

function getEnv() {
  if (typeof wx !== "undefined" && wx.getSystemInfo) {
    return ENV_TYPE.WEAPP;
  }
  if (typeof window !== "undefined") {
    return ENV_TYPE.WEB;
  }
  if (typeof global !== "undefined" && global.ErrorUtils) {
    return ENV_TYPE.RN;
  }
  return "Unknown environment";
}

exports.connect = getEnv() == ENV_TYPE.WEB ? _nervRedux.connect : _redux.connect;