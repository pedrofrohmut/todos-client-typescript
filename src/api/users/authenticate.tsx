import axios from "axios"

import { ApiResponse } from "../types"

const authenticateApi = async (token: string): Promise<ApiResponse> => {
  try {
    const response = await axios.get("http://localhost:5000/api/v1/private/users/authenticate", {
      headers: {
        "x-auth-token": token
      }
    })
    const { message, data } = response.data
    const apiResponse: ApiResponse = {
      message,
      hasError: false,
      data
    }
    return apiResponse
  } catch (error) {
    const apiErrorResponse: ApiResponse = {
      message: error.response.data,
      hasError: true
    }
    return apiErrorResponse
  }
}

export default authenticateApi
