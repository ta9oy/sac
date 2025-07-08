
// import store from "../store";
export class ApiRoutes {
  static readonly BASE_PATH = 'http://localhost:9090/';
  static readonly VERSION = 'v1/';
  static readonly BASE_URL = 'http://localhost:9090/api/'+ ApiRoutes.VERSION;

  static readonly ADD_USER = `${ApiRoutes.BASE_URL}user/add`;
  static readonly LOGIN = `${ApiRoutes.BASE_URL}auth/login`;
  static readonly CHECK_TOKEN = `${ApiRoutes.BASE_URL}auth/checkToken`;
  static readonly LOGOUT = `${ApiRoutes.BASE_URL}auth/logout`;
  static readonly REGISTER = `${ApiRoutes.BASE_URL}auth/register`;
  static readonly GET_USER = `${ApiRoutes.BASE_URL}user`;

}

export function GetApiRoute(route: string, value = "") {

  let _route = route;

  if (_route.match(':id')) {
    if (value != null) {
      _route = route.replace(":id", value);
    }
  }
  console.log(ApiRoutes.BASE_PATH + ' - ' + ApiRoutes.VERSION + ' - ' + _route, "API ROUTE");
  return ApiRoutes.BASE_URL + ApiRoutes.VERSION + _route;
}

// export function handleException(error: any) {
//   window.scrollTo(0, 0);
//   store.commit('finish');
//   if (error.toString().includes('Network Error')) {
//     store.commit('setErrorMsg', 'Opps! Network Error, Please try again later');

//   } else if (error != undefined && error != null) {
//     if (error.response && error.response.status > 400) {
//       store.commit('setErrorMsg', error.response.data.message);
//     } else if (error.response && error.response.status == 400) {
//       store.commit('setErrorMsg', "Invalid Input");
//     } else {
//       console.log('ERROR: ', error.message);
//     }

//   }

// }

export function setAuthorizationToken(token: string) {
  return {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
  };

}
