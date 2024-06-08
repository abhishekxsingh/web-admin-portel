import { all } from "redux-saga/effects";
//const context = import.meta.globEager("../../pages/**/saga");

import { watchSignin } from "../../pages/user/login/saga";
import { watchRole } from "../../pages/role/saga";
import { watchCustomerList } from "../../pages/customer/saga";
import { watchUserList } from "../../pages/user/list/saga";
import { watchNewsList } from "../../pages/news/saga";
import { watchNewsDetail } from "../../pages/news-detail/saga";
import { watchNewsStatus } from "../../pages/news-status/saga";
import { watchNewsCategoriesList } from "../../pages/categories-list/saga";
import { watchNewsAddTagList } from "../../pages/tag-list/saga"
import { watchNewsEdit } from "../../pages/news-edit/saga"

// import { watchRejectDocument } from "../../pages/verify-document/saga";
// const sagasList = [];

// for (const key in context) {
//   if (Object.prototype.hasOwnProperty.call(context, key)) {
//     const moduleObject = context[key];

//     for (const methodName in moduleObject) {
//       if (typeof moduleObject[methodName] === "function") {
//         sagasList.push(moduleObject[methodName]);
//       }
//     }
//   }
// }

const sagas = function* sagas() {
  yield all([
     watchSignin(),
     watchCustomerList(),
     watchNewsList(),
     watchUserList(),
     watchRole(),
     watchNewsDetail(),
     watchNewsStatus(),
     watchNewsCategoriesList(),
     watchNewsAddTagList(),
     watchNewsEdit()
  ]);
};

export default sagas;
