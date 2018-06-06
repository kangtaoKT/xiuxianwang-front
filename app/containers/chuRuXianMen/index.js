import React, { Component } from 'react';
import MySelect from '../../components/MySelect';
import style from './index.scss';

export default class ChuRuXianMen extends Component {
  constructor() {
    super();
    this.state = {
      showText:'请选择',
      options: [{label: '请选择', value: '请选择'}]
    }
  }
  handleClick = (obj,name) => {
    let label = obj.label;
    let v = obj.value;
    this.setState({
      [name]: label
    })
  };
  render() {
    return (
      <div>
        <MySelect
          value={this.state.showText}
          options={this.state.options}
          handleClick={this.handleClick}
          name="showText"
        />
      </div>
    )
  }
}
