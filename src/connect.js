import { connect as connect_wx } from "@tarojs/redux";
import { connect as connect_web } from "nerv-redux";

const ENV_TYPE = {
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

exports.connect = getEnv() == ENV_TYPE.WEB ? connect_web : connect_wx;
