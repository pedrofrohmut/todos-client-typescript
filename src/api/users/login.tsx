import axios from "axios"

import { ApiResponse } from "../types"

export interface LoginBody {
  email: string
  password: string
}

export default async (credentials: LoginBody): Promise<ApiResponse> => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/v1/public/users/login",
      credentials
    )
    const { httpStatus, message } = response.data
    const { token, user } = response.data.data
    const { id, email, firstName, lastName } = user
    const apiResponse: ApiResponse = {
      httpStatus,
      message,
      hasError: false,
      data: {
        user: {
          id,
          email,
          firstName,
          lastName
        },
        token
      }
    }
    return apiResponse
  } catch (error) {
    const apiErrorResponse: ApiResponse = {
      httpStatus: error.response.status,
      message: error.response.data,
      hasError: true
    }
    return apiErrorResponse
  }
}
