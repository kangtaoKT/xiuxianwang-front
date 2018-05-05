import React, { Component } from 'react'
import './index.css'
import resource from '../util/resource'
import createHistory from 'history/createHashHistory'
const history = createHistory();

class Login extends Component {
    constructor() {
      super();
      this.state = {
        username: '',
        password: ''
      }
    }
    componentDidMount() {
      resource.get('/api/login?name=ss&password=ss').then((res) => {
          console.log(res)
      })
    }
    requireLogin = () => {
      let name = this.state.username;
      let psw = this.state.password;
      resource.get(`/api/login?name=${name}&password=${psw}`).then((res) => {
        console.log(res)
        if(res.status !== 200) {
          alert(res.message)
        }else {
          alert(res.message)
        }
      })
    };
    login = () => {
      if(!!this.state.username && !!this.state.password) {
        this.requireLogin();
      }
    };
    back = () => {
      history.push('/');
    };
    render() {
        return (
            <div className='login'>
                <div className="login-left">
                    <p className="login-left-top">
                        <span title='回到起点' onClick={this.back}></span>
                        <span>仙风侠骨</span>
                    </p>
                    <div className="login-left-middle">
                        <p>天下客</p>
                        <p>缘起随风</p>
                        <p>问道漫飞花 ></p>
                    </div>
                </div>
                <div className="login-right">
                    <ul className="login-right-content">
                        <li>欢迎登录</li>
                        <li><input placeholder="请输入用户名" /></li>
                        <li><input placeholder="请输入密码" /></li>
                        <li onClick={this.login}>立即登录</li>
                    </ul>
                </div>
            </div>
        )
    }
}

module.exports = Login
