import React, { Component } from 'react';
import MySelect from '../../components/MySelect';
import style from './index.scss';

export default class ChuRuXianMen extends Component {
  constructor() {
    super();
    this.state = {
      showText:'请选择',
      options: [
        {label: '请选择', value: '请选择'},
        {label: 'one', value: 'one'},
        {label: 'two', value: 'two'}
      ],
      title: [
        'title1', 'title2', 'title3', 'title4', 'title5', 'title6',
        'title7', 'title8', 'title9', 'title10'
      ],
      data: [
        'data1', 'data2', 'data3', 'data4', 'data5', 'data6', 'data7',
        'data8', 'data9', 'data10', 'data11', 'data12'
      ]
    }
  }
  handleClick = (obj,name) => {
    let label = obj.label;
    let v = obj.value;
    this.setState({
      [name]: label
    })
  };
  scrollChange = () => {
    let ktScroll = document.getElementById('ktScroll');
    let ktTitle = document.getElementById('ktTitle');
    let scrollHeight = ktScroll? ktScroll.scrollLeft: 0;
    if(ktTitle) {
      ktTitle.style.left = `-${scrollHeight}px`;
    }
  };
  render() {
    let { title, data } = this.state;
    return (
      <div style={{padding: '50px'}}>
        <MySelect
          value={this.state.showText}
          options={this.state.options}
          handleClick={this.handleClick}
          name="showText"
        />
        <div className={style['container']}>
          <div  className={style['title']}>
            <div id='ktTitle' className={style['scroll-title']}>
              <ul>
                <li>
                  {
                    title.map((obj, index) => (
                      <span key={index}>{obj}</span>
                    ))
                  }
                </li>
              </ul>
            </div>
          </div>
          <div onScroll={this.scrollChange} id='ktScroll' className={style['body']}>
            <ul>
              <li>
                {
                  title.map((obj, index) => (
                    <span key={index}>{obj}</span>
                  ))
                }
              </li>
            </ul>
            <ul>
              {
                data.map((obj, index) => (
                  <li key={index}>
                    {
                      title.map((ob, i) => (
                        <span key={i}>{ob}</span>
                      ))
                    }
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
