import { combineReducers } from "redux";
const context = import.meta.globEager("../../pages/**/reducer.js");

const reducers = {};

for (const key in context) {
  if (Object.prototype.hasOwnProperty.call(context, key)) {
    const reducerName = key.replace("../../pages/", "").replace("/reducer.js", "");
    const name =reducerName.split('/') ;
    reducers[name[name.length-1]] = context[key].default;
  }
}

const rootReducer = combineReducers(reducers);

export default rootReducer;
