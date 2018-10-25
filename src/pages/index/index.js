/* eslint-disable react/no-multi-comp */
import Taro, {Component} from '@tarojs/taro'
import {Button, Image, ScrollView, View} from '@tarojs/components'
import {AtTabs, AtTabsPane} from 'taro-ui'
import newAddPng from '../../image/index/new_add.png'
import './index.scss'

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
    }
  }

  //配置标题颜色
  config = {
    navigationBarTitleText: '投资账本',
    navigationBarBackgroundColor: '#ff5341',
    navigationBarTextStyle: 'white',
  };

  componentWillMount() {
  }

  componentDidMount() {

  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  //Taro 的导航操作
  onSubmit() {

    //Taro 导航到一个新的页面
    Taro.navigateTo(
      {
        url: '/pages/first/first?name=hunter&age=25'
      }
    )
  }

  onChangeTab(value) {
    console.log("onChangeTab", value);
    this.setState({
      currentTab: value,
    })
  }

  render() {
    return (
      <ScrollView scrollY scrollWithAnimation className='scroll_container'>
        <Image src={newAddPng} className='image' />
        <AtTabs
          current={this.state.currentTab}
          scroll={false}
          className='at-tabs'
          animated={false}
          tabDirection='horizontal'
          tabList={[{title: '按月薪计算'}, {title: '按年薪计算'}]}
          onClick={this.onChangeTab.bind(this)}
        >
          <AtTabsPane
            current={this.state.currentTab}
            index={0}
          >
            <View style={{height: 200, width: "100%"}}> 11111</View>

          </AtTabsPane>
          <AtTabsPane current={this.state.currentTab} index={1}>
            <View style={{height: 100, width: "100%"}}> 222222</View>
          </AtTabsPane>
        </AtTabs>
        <Button className='submit_button submit_button_font' onClick={this.onSubmit}>提交</Button>
        <Button className='cancel_button'>取消</Button>
      </ScrollView>
    )
  }
}






