import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_PRODUCT_PROGRESS } from '../redux-saga/Product/Action/action';

function AppCall() {
  const dispatch = useDispatch()
  
  const data = useSelector((state) => state.ProductReducer);

  console.log(data ,"this code in over AppCall.jsx fil code output");
  
  useEffect(() =>{
    dispatch({type : GET_PRODUCT_PROGRESS})
  },[])
  return (
    <div>
      <div> 
        AppCall
      </div>
    </div>
  )
}

export default AppCall