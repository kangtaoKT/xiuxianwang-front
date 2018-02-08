import axios from 'axios'
// import Notice from '../components/Notice'
import createHashHistory from 'history/createHashHistory';
import {TOKEN} from '../constants/storage'
import loading from './loading'

let loadingLayer = loading()


/*
 *   封装axios get, post, delete, put 方法, 可配置是否有缓冲
 * */
let resource = {
    count: 0,
    timer: null,
    isOpen: true,
    width: 0,                  // 顶部加载进度条宽度
    post: function (uri, params, isLoading) {
        return this.send(uri, params, 'post', isLoading);
    },

    // 删除数据
    delete: function (uri, isLoading) {
        return this.send(uri, null, 'delete', isLoading);
    },

    // 更新数据
    put: function (uri, params, isLoading) {
        return this.send(uri, params, 'put', isLoading);
    },

    // 获取数据
    get: function (uri, isLoading) {
        return this.send(uri, null, 'get', isLoading);
    },
    open: function () {
        // this.isOpen = true;
    },
    close: function () {
        // this.isOpen = false;
    },

    send: function (uri, params, method, isLoading) {
        if (!(isLoading === false) && (++this.count === 1)) {
            clearInterval(this.timer);
            if (this.width < 80) {
                this.timer = setInterval(() => {
                    this.width += 1;
                    loadingLayer.style.width = this.width + '%';
                    if (this.width >= 80) {
                        clearInterval(this.timer);
                    }
                }, 30);
            }
        }

        let promise = new Promise((resolve, reject) => {
            switch (method) {
                case 'post':
                    axios.post(uri, params).then((res) => {
                        this.isStop(isLoading);
                        resolve(res.data);
                    });
                    break;
                case 'delete':
                    axios.delete(uri).then((res) => {
                        this.isStop(isLoading);
                        resolve(res.data);
                    });
                    break;
                case 'put':
                    axios.put(uri, params).then((res) => {
                        this.isStop(isLoading);
                        resolve(res.data);
                    });
                    break;
                case 'get':
                    axios.get(uri).then((res) => {
                        this.isStop(isLoading);
                        resolve(res.data);
                    });
                    break;
            }
        });
        return promise;
    },

    isStop: function (isLoading) {
        if (!(isLoading === false) && (--this.count === 0)) {
            clearInterval(this.timer);
            this.timer = setInterval(() => {
                this.width += 5;
                loadingLayer.style.width = this.width + '%';
                if (this.width >= 110) {
                    clearInterval(this.timer);
                    this.width = 0;
                    loadingLayer.style.width = 0;
                }
            }, 20);
        }
    }
};

// axios.defaults.baseURL = 'http://192.168.1.169:7087';

// 请求拦截器
axios.interceptors.request.use(function (config) {
    // config.headers.token = sessionStorage.getItem(TOKEN)
    config.headers['Access-Control-Allow-Origin'] = "*"
    return config;
}, function (error) {
    return Promise.reject(error);
});

// 响应拦截器
axios.interceptors.response.use(function (response) {
    // switch (response.data.status) {
    //     case 401:
    //         createHashHistory().push('/login')
    //         break;
    //     case 500:
    //         Notice.error(response.data.message)
    //         break;
    // }
    return response;
}, function (error) {
    if (resource.timer) {
        resource.isStop(true);
    }
  /*  sessionStorage.removeItem(TOKEN)
    createHashHistory().push('/login')*/

   /* switch (error.data.status) {
        case 401:
            createHashHistory().push('/login')
            break;
        case 500:

            break;
    }*/

    return Promise.reject(error);
});

export default resource;
