import React,{Component} from 'react';
import style from './index.scss';

export default class MySelect extends Component {
    constructor(props) {
        super(props)
        this.state = {
            display: false,
            afterIcon: false,
        }
    }
    componentDidMount() {
      let selectContainer = document.getElementById('selectContainer');
      selectContainer.addEventListener('onblur', this.blur, false);
      document.addEventListener('click', this.blur);
    }
    titleClick = (e) => {
        if (this._getParent(e.target)) {
          e.nativeEvent.stopImmediatePropagation()
        }
        if(this.state.display === false) {
            this.setState({
                display: true,
                afterIcon: true
            })
        }else {
            this.setState({
                display: false,
                afterIcon: false
            })
        }
    }
    _getParent(ele) {
      if (ele.getAttribute('id') === 'selectContainer') {
        return true
      } else {
        return this._getParent(ele.parentNode)
      }

      if (ele.nodeName === 'body') {
        return false
      }
    }
    blur = () => {
      this.setState({
        display: false,
        afterIcon: false
      });
    }
    componentWillUnmount() {
      let selectContainer = document.getElementById('selectContainer');
      selectContainer.removeEventListener('onblur', this.blur, false);
      document.addEventListener('click', this.blur)
    }
    render() {
        return (
            <div className={`${style['my-select']} ${this.state.afterIcon ? style['bottom-after'] : style['top-after']}`}
                 onClick={(event) => this.titleClick(event)}
                 tabIndex="1"
                 id='selectContainer'

            >
                <span className="text-overflow" title={this.props.value}>
                    {
                      this.props.value
                    }
                </span>

                <div className={style['select-content']} style={this.state.display ? {display: 'block'} : {display: 'none'}}>
                  <ul>
                    {
                      this.props.options.map((obj, index) => (
                        <li className="text-overflow" onClick={this.props.handleClick.bind(this, obj,this.props.name)}
                            key={index}
                            title={obj.label}
                        >{obj.label}</li>
                      ))
                    }
                  </ul>
                </div>
            </div>
        )
    }

}
