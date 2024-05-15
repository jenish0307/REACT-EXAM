import { GET_PRODUCT_ERROR, GET_PRODUCT_PROGRESS, GET_PRODUCT_SUCCESS } from "../Action/action"

const initialState = {
  Product: [],
  getProductProgress: false,
  getProductError: null,
  getProductloaded: false
}

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    // Get Product Reducer
    case GET_PRODUCT_PROGRESS: {
      return {
        ...state,
        getProductProgress: true, 
      }
    };
    case GET_PRODUCT_ERROR: {
      return {
        ...state, 
        getProductError: action.data, 
      }
    };
    case GET_PRODUCT_SUCCESS: {
      return {
        ...state, 
        getProductloaded: true,
        Product: action.data
      }
    };
    default: return state;
  }
}
export default ProductReducer