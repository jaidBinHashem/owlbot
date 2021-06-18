import axios from 'axios';

import {BASE_URL} from './URL';

export const getService = async request => {
  try {
    let requestHeaders = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Token 2b62c1732784a65e4e73c214ef667bf653035f35',
    };

    let response = await axios({
      method: 'get',
      url: BASE_URL + request.word,
      headers: requestHeaders,
    });
    return {success: true, data: response.data};
  } catch (error) {
    if (error.response) {
      request.showLoader && loaderHandler.hideLoader();
      return {success: false, data: error.response.data};
    }
  }
};
