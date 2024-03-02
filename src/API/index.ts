import axios, { AxiosRequestConfig } from "axios";
import * as config from '../Config/common.config';

interface APIRequestParams {
  url: string;
  method: string;
}

const APIRequest = async ({ url, method }: APIRequestParams, data: any = null, params: any = null) => {
  const apiurl = `http://${process.env.REACT_APP_API_ENDPOINT}${url}`;
  try {
    let token: string = config.getSessionToken();

    let payload: AxiosRequestConfig = {
      url: apiurl,
      method,
      headers: {
        Authorization: token,
      },
    };

    if (params) payload.params = params;
    if (data) payload.data = data;

    return await axios(payload);
  } catch (error: any) {
    return { error: error?.response?.data ?? { message: 'custom' } };
  }
};

export default APIRequest;


// const sendFormAPIRequest = async ({ url, method }, data) => {
//   try {
//     let token = await helpers.getItem("auth-token");

//     const apiurl = `http://${ENDPOINT}:5003` + `${url}`;
//     const xhr = new XMLHttpRequest();
//     const response = await new Promise(async (resolve, reject) => {
//       xhr.onreadystatechange = e => {
//         if (xhr.readyState !== 4)
//           return;
//         if (xhr.status === 200)
//           resolve({ data: JSON.parse(xhr.responseText) });
//         else {
//           if (xhr?.responseText)
//             return reject({ error: xhr?.responseText })
//           reject({ error: { message: "Please try again" } });
//         }

//       };
//       xhr.open(method, apiurl);
//       xhr.setRequestHeader(`content-type`, `multipart/form-data`);
//       xhr.setRequestHeader(`Authorization`, token);
//       xhr.send(data);
//     });
//     return response;

//   } catch ({ error }) {
//     const response = { ...JSON.parse(error) };
//     if (response?.message)
//       return { error: response };
//     return { error: "Message" }
//   }
// }

// export { sendRequest, sendFormAPIRequest };
