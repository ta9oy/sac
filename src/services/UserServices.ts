import { ApiRoutes, setAuthorizationToken } from "../helper/ApiRoutes";
import axios from "axios";


// import { GetApiRoute } from "../helper/ApiRoutes";
// import { setAuthorizationToken } from "../helper/ApiRoutes";


// import { setAuthorizationToken } from "../helper/Authorization";
// import store from "../store";
// import { handleException } from  "../helper/ApiRoutes";

export class UserServices {

  async addUser(payload: any): Promise<any> {
    // const auth = store.getters.auth;
    try {
      // const response = await axios.post(GetApiRoute(ApiRoutes.ADD_USER),payload
      const response = await axios.post(ApiRoutes.ADD_USER, payload
        // setAuthorizationToken(auth.token)
      );
      if (response.status == 201) {
        return response.data.object;
      }
    }
    catch (ex) {
      // handleException(ex);
    }
  }
  async getUser(payload: { page: number; size: number }): Promise<any> {
    try {
      const url = `${ApiRoutes.GET_USER}?page=${payload.page}&size=${payload.size}`;
      const authToken = localStorage.getItem('token') || "";
      const response = await axios.get(url, setAuthorizationToken(authToken));

      if (response.status === 200) {
        return response.data.object;
      }
      throw new Error(`Unexpected status code: ${response.status}`);
    } catch (ex) {
      console.error("Error fetching user:", ex);
      // handleException(ex); // Uncomment if you have this function
      throw ex; // Re-throw the error to let the caller handle it
    }
  }

  // async getUser(payload: any): Promise<any> {
  //     // const auth = store.getters.auth;
  //     console.log("Getting user with payload: ", GetApiRoute(ApiRoutes.GET_USER));
  //     try{
  //         const response = await axios.get(ApiRoutes.GET_USER)+`?page=${payload.page}&size=${payload.size}`;
  //         if(response.status == 200){
  //             return response.data.object;
  //         }
  //     }
  //     catch(ex){
  //         // handleException(ex);
  //     }
  // }
}

