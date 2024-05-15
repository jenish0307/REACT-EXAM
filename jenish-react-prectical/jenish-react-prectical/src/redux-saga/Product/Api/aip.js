import axios from "axios";
import { BASE_URL, GET_PRODUCT_AIP } from "../../Constant";
export const getProduct = () => {
  return axios.get(BASE_URL + GET_PRODUCT_AIP).then((res) => {
    const data = res.data
    const status = res.status
    return {
      data,
      status
    }
  }).catch((error) => {
    console.log(error);
  })
}