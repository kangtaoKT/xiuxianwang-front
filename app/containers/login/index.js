import React, { Component } from 'react'
import './index.css'
import resource from '../../util/resource'
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
      window.addEventListener('keydown', this.keyDownLister)
    }
    keyDownLister = () => {
      let code = event.keyCode || event.which || event.charCode;
      if (code == 13) {
        this.login()
      }
    };
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
    getUserMessage = (e,type) => {
      this.setState({
        [type]: e.target.value
      },() => {
        console.log('输入信息' + this.state[type])
      })
    };
    componentWillUnmount() {
      window.removeEventListener('keydown', this.keyDownLister)
    }
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
                        <li><input type='text' placeholder="请输入用户名" onChange={(event) => {this.getUserMessage(event,'username')}} /></li>
                        <li><input type='password' placeholder="请输入密码" onChange={(event) => {this.getUserMessage(event,'password')}} /></li>
                        <li onClick={this.login}>立即登录</li>
                    </ul>
                </div>
            </div>
        )
    }
}

module.exports = Login
