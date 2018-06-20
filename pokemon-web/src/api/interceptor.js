/**
 * Created on 2018/6/20.
 */
import axios from 'axios';
import {Message} from 'element-ui';

axios.interceptors.request.use(function (config) {
  config.withCredentials = true;
  return config;
}, function (error) {
  return Promise.reject(error);
});


axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if (error.response) {
      if ( error.response.status === 401 ) {
        Message({type: 'warning', message:"401 pika"});
      } else if ( error.response.status === 403  ) {
        Message({type: 'warning', message:"没有权限 pika"});
      } else if(error.response.status > 399 && error.response.status < 500){
        Message({type: 'warning', message:"other code pika"});
      } else {
        if(error.response.status > 499){
          Message({type: 'warning', message:"499 pika"});
        }
      }
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
    return Promise.reject(error);
  }
);
