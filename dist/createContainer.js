"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createContainer;

var _redux = require("@tarojs/redux");

/*
	utility to access the store using render function
*/
function createContainer(module) {
  // const mapStateToProps = state => state[module.name];
  // const mapDispatchToProps = dispatch => {
  //   return Object.keys(module.actions).map(key => {
  //     let action = module.actions[key];
  //     return dispatch(action());
  //   });
  // };

  // const Container = props => props.children(props);
  // return connect(
  //   mapStateToProps,
  //   module.actions || {}
  // )(Container);
  return module;
}