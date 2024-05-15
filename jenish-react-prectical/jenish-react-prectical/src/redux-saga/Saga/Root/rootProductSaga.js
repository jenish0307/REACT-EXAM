import { takeLatest } from "redux-saga/effects";
import { GET_PRODUCT_PROGRESS } from "../../Product/Action/action";
import { handleGetProduct } from "../ManageProduct/manageProduct";

export function* getProductSaga (){
  yield takeLatest(GET_PRODUCT_PROGRESS , handleGetProduct)  
}