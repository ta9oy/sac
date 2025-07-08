import { ApiRoutes, GetApiRoute, setAuthorizationToken } from "../helper/ApiRoutes";
import axios from "axios";

export class LoginServices {
  async loginUser(payload: any): Promise<any> {
    const auth = {
      token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJxIiwiaWF0IjoxNzQ5NDk3OTI1LCJleHAiOjE3NDk1MDE1MjV9.L9vfXEG6fM4Yykls2rExKiUtYRKRE8r0TaulFlJc3m0'
    }; // Assuming you have a way to get the auth token, e.g., from a store or context
    // console.log("Logging in with payload: ", GetApiRoute(ApiRoutes.LOGIN));
    try {
      const response = await axios.post(ApiRoutes.LOGIN, payload,
        setAuthorizationToken(auth.token)
      );
      if (response.status == 200) {
        localStorage.setItem('token', response.data.token); // Store the token in localStorage
        return response;
      }
    } catch (ex) {
      console.error("Error fetching user:", ex);
      // handleException(ex); // Uncomment if you have this function
      throw ex; // Re-throw the error to let the caller handle it
    }
  }

  async checkToken(): Promise<any> {
    const authToken = localStorage.getItem('token');
    // if (!authToken) {
    //   throw new Error("Authorization token is missing");
    // }
    try {
      const response = await axios.get(ApiRoutes.CHECK_TOKEN, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        }
      });
      if (response.status === 200) {
        return response;
      }
      throw new Error(`Unexpected status code: ${response.status}`);
    } catch (ex) {
      console.error("Error checking token:", ex);
      // handleException(ex); // Uncomment if you have this function
      throw ex; // Re-throw the error to let the caller handle it
    }
  }

    // async addUser(payload: any): Promise<any> {
    //   // const auth = store.getters.auth;
    //   console.log("Adding user with payload: ", GetApiRoute(ApiRoutes.ADD_USER));
    //   try {
    //     // const response = await axios.post(GetApiRoute(ApiRoutes.ADD_USER),payload
    //     const response = await axios.post(ApiRoutes.ADD_USER, payload
    //       // setAuthorizationToken(auth.token)
    //     );
    //     if (response.status == 201) {
    //       return response.data.object;
    //     }
    //   }
    //   catch (ex) {
    //     // handleException(ex);
    //   }
    // }
}
