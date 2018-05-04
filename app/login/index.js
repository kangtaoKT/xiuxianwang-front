import React,{Component} from 'react'
import './index.css'
import resource from '../util/resource'

class Login extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
        resource.get('/api/login?name=ss&password=ss').then((res) => {
            console.log(res)
        })
    }
    render() {
        return (
            <div className='login'>
                <div className="login-left">
                    <p className="login-left-top">
                        <span></span>
                        <span>仙风侠骨</span>
                    </p>
                    <div className="login-left-middle">
                        <p>遇见最美的自己</p>
                        <p>To meet the most beautiful yourself</p>
                        <p>Record ></p>
                    </div>
                </div>
                <div className="login-right">
                    <ul className="login-right-content">
                        <li>欢迎登录</li>
                        <li><input placeholder="请输入用户名" /></li>
                        <li><input placeholder="请输入密码" /></li>
                        <li>立即登录</li>
                    </ul>
                </div>
            </div>
        )
    }
}

module.exports = Login
