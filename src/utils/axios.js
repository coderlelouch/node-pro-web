import axios from 'axios'

//配置路径
axios.defaults.baseURL = ''

axios.defaults.headers['content-type'] = 'application/json'
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
	config.headers['token'] = 'OFUvqsZub4qRt2AWHemTDsWMK';
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
	console.log(response.data);
    return response;
  }, function (error) {
    // 对响应错误做点什么
	console.log(error);
    return Promise.reject(error);
  });


export default axios
