import React,{Component} from 'react'
import '../login/index.css'
import resource from '../../util/resource'
import createHistory from 'history/createHashHistory'
const history = createHistory();

class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            rePassword: ''
        }
    }
    componentDidMount() {
      window.addEventListener('keydown', this.keyDownLister)
    }
    keyDownLister = () => {
      let code = event.keyCode || event.which || event.charCode;
      if (code == 13) {
        this.register()
      }
    };
    getUserMessage = (e,type) => {
        this.setState({
            [type]: e.target.value
        },() => {
            console.log('输入信息' + this.state[type])
        })
    };
    requireRegister = () => {
        let params = {
            name: this.state.username,
            psw: this.state.password
        };
        resource.post('/api/register',params).then((res) => {
            console.log(res)
            if(res.status !== 200) {
                alert(res.message)
            }else {
                alert(res.message)
            }
        })
    };
    register = () => {
        if(!!this.state.username && !!this.state.password && this.state.rePassword === this.state.password) {
            this.requireRegister()
        }
    };
    back = () => {
      history.push('/');
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
                        <li>欢迎注册</li>
                        <li><input type='text' placeholder="请输入用户名" onChange={(event) => {this.getUserMessage(event,'username')}} /></li>
                        <li><input type='password' placeholder="请输入密码" onChange={(event) => {this.getUserMessage(event,'password')}} /></li>
                        <li><input type='password' placeholder="请再次输入密码" onChange={(event) => {this.getUserMessage(event,'rePassword')}} /></li>
                        <li onClick={this.register}>立即注册</li>
                    </ul>
                </div>
            </div>
        )
    }
}

module.exports = Register
