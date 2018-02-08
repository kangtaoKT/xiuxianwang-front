import React,{Component} from 'react'
import '../login/index.css'
import resource from '../util/resource'
// import axios from 'axios'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            rePassword: ''
        }
    }

    getUserMessage = (e,type) => {
        this.setState({
            [type]: e.target.value
        },() => {
            console.log('输入信息' + this.state[type])
        })
    }

    requireRegister = () => {
        let params = {
            name: this.state.username,
            psw: this.state.password
        }
        resource.post('/api/register',params).then((res) => {
            console.log(res)
            if(res.status !== 200) {
                alert(res.message)
            }else {
                alert(res.message)
            }
        })
    }

    register = () => {
        if(!!this.state.username && !!this.state.password && this.state.rePassword === this.state.password) {
            this.requireRegister()
        }
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
                        <li>欢迎注册</li>
                        <li><input placeholder="请输入用户名" onChange={(event) => {this.getUserMessage(event,'username')}} /></li>
                        <li><input placeholder="请输入密码" onChange={(event) => {this.getUserMessage(event,'password')}} /></li>
                        <li><input placeholder="请再次输入密码" onChange={(event) => {this.getUserMessage(event,'rePassword')}} /></li>
                        <li onClick={this.register}>立即注册</li>
                    </ul>
                </div>
            </div>
        )
    }
}

module.exports = Register