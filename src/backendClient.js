import axios from "axios"
import Cookies from "js-cookie"
import {BACKEND_HOST} from "./constants/urls"

axios.defaults.headers.post["Content-Type"] = "multipart/form-data"

const BackendClient = axios.create({
  baseURL: BACKEND_HOST,
  withCredentials: true,
  headers: {
    "X-CSRFToken": Cookies.get("csrftoken"),
  },
})

BackendClient.interceptors.request.use(
  (config) => {
    config.headers["X-CSRFToken"] = Cookies.get("csrftoken")
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default BackendClient
