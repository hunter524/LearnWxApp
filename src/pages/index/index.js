/* eslint-disable react/no-multi-comp */
import Taro, {Component} from '@tarojs/taro'
import {View, Text, ScrollView, Button, Input} from '@tarojs/components'
import ReactPropTypes from 'prop-types'
import InputItem from './InputItem.js'


export default class Index extends Component {

  //配置标题颜色
  config = {
    navigationBarTitleText: '投资账本',
    navigationBarBackgroundColor: '#ff5341',
    navigationBarTextStyle: 'white',
  };

  componentWillMount() {
  }

  componentDidMount() {

    //调用Taro的登录请求(wx.login)
    Taro.login().then(function (response) {
      console.log(response.errMsg)
      console.log(response.code)
    }, function (errr) {
      console.log(errr)
    })
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }
  render() {
    return (
      <ScrollView scrollY scrollWithAnimation className='scroll_container'>
        <InputItem title='税前工资' inputPlaceHolder='税前工资' type='1' />
        <InputItem title='子女教育' inputPlaceHolder='子女教育' type='2' />
        <InputItem title='大病医疗' inputPlaceHolder='大病医疗' type='3' />
        <InputItem title='住房租金' inputPlaceHolder='住房租金' type='4' />
        <InputItem title='房贷利息' inputPlaceHolder='房贷利息' type='5' />
        <InputItem title='年终奖元' inputPlaceHolder='年终奖元' type='6' />
        <InputItem />

        <Button>提交</Button>
      </ScrollView>
    )
  }
}



