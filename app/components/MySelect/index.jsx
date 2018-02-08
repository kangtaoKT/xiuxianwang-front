import React, { Component } from 'react';
import style from './index.scss';

export default class MySelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: false,
      afterIcon: false,
    }
  }
  titleClick = () => {
    if (this.state.display === false) {
      this.setState({
        display: true,
        afterIcon: true
      })
    } else {
      this.setState({
        display: false,
        afterIcon: false
      })
    }
  }
  blur = () => {
    this.setState({
      display: false,
      afterIcon: false
    })
  }
  render() {
    return (
      <div className={`${style['my-select']} ${this.state.afterIcon ? style['bottom-after'] : style['top-after']}`}
        onClick={this.titleClick}
        onBlur={this.blur}
        tabIndex="1"
      >
        <span className="text-overflow" title={this.props.value}>
          {
            this.props.value
          }
        </span>
        <div className={style['select-content']} style={this.state.display ? { display: 'block' } : { display: 'none' }}>
          <ul>
            {
              this.props.options.map((obj, index) => (
                <li className="text-overflow" onClick={this.props.handleClick.bind(this, obj, this.props.name)}
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
