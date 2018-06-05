import axios from 'axios';

// axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'http://gyr.mrray.me/actionapi/weixin' : 'http://zmsz.leadyssg.com/actionapi/weixin'  // http://zmsz.leadyssg.com     http://www.soadna.com
axios.defaults.baseURL = 'api';
axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
});

axios.interceptors.response.use(response => {
  /*if (response.data) {
    response.data = response.data[0]
  }
  if (response.data.code === '10000') {
    return Promise.resolve(response.data)
  }*/
  return response.data;
}, error => {
  return Promise.reject(error)
});

export const getActivityDetail = id => {
  return axios.get('SelectOneAct', {
    params: {
      actuid: id
    }
  })
};

export const login = data => {
  return axios.post('login', data);
};

export const register = data => {
  return axios.post('register', data);
};

export const addChat = data => {
  return axios.post('chatadd', data);
};

export const getChats = data => {
  return axios.get('chatlist', {params: data});
};
