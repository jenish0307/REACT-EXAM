import { call, put } from "redux-saga/effects";
import { GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS } from "../../Product/Action/action";
import { getProduct } from "../../Product/Api/aip"; 

//Get Product Detail
export function* handleGetProduct(action) {
  try{
    const res = yield call(getProduct , action);
    const status = res.status;
    const data = res.data;
    if(status === 200){
      yield put({type  : GET_PRODUCT_SUCCESS , data});
    }else{
      yield put({type: GET_PRODUCT_ERROR , data})
    }
  }catch (error){
    yield put({type: GET_PRODUCT_ERROR , error})
  }
}