import { all } from "redux-saga/effects";
import { getProductSaga } from "./Root/rootProductSaga";

export function* rootSaga (){
  yield all([getProductSaga()])
}