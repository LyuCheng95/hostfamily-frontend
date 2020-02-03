import axios from 'axios';

const endpoint = 'https://absolute-nexus-265212.appspot.com/';
export const login = (username, password) => {
  return axios.get(endpoint + 'login?username=' + username + '&password=' + password)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

export const register = (username, password) => {
  return axios.get(endpoint + 'register?username=' + username + '&password=' + password)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

export const person = (action, metaData) => {
  let request = endpoint + 'person?action=' + action;
  Object.keys(metaData).forEach(key => {
    request += '&';
    request += key;
    request += '=';
    request += metaData[key];
  });
  return axios.get(request)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

export const attendance = (action, metaData) => {
  let request = endpoint + 'attendance?action=' + action;
  metaData.forEach((key, value) => {
    request += '&';
    request += key;
    request += '=';
    request += value;
  });
  return axios.get(request)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}