/* eslint-disable react/no-multi-comp */
import Taro, {Component} from '@tarojs/taro'
import {Button, Image, ScrollView, View, Input} from '@tarojs/components'
import {AtTabs, AtTabsPane} from 'taro-ui'
import ItemInput from './ItemInput.js'

import newAddPng from '../../image/index/new_add.png'
import divider from '../../image/index/divider.png'

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

    // //Taro 导航到一个新的页面
    Taro.navigateTo(
      {
        url: '/pages/result/result?name=hunter&age=25'
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
    //年收入 月收入部分布局
    const monthLayout = (
      <View>
        <View className='tab_inner_item'>
          <View className='tab_inner_item__left'>
            <View className='tab_inner_item__left_title'>月薪</View>
            <View className='tab_inner_item__left_sub'>(税前)</View>
          </View>
          <View className='tab_inner_item__right_container'>
            <Input
              className='tab_inner_item__right'
              placeholderClass='tab_inner_item__right_place_holder'
              placeholderStyle='tab_inner_item__right_place_holder'
              placeholder='请输入'
              type='digit'
              confirmType='next'
              autoFocus='true'
            />
          </View>
        </View>
        <View className='tab_inner_item'>
          <View className='tab_inner_item__left'>
            <View className='tab_inner_item__left_title'>年终奖</View>
            <View className='tab_inner_item__left_sub'>(税前)</View>
          </View>

          <View className='tab_inner_item__right_container'>

            <Input
              className='tab_inner_item__right'
              placeholderClass='tab_inner_item__right_place_holder'
              placeholder='请输入'
              type='digit'
            />
          </View>
        </View>
      </View>
    );

    const yearLayout = (
      <View>
        <View className='tab_inner_item'>
          <View className='tab_inner_item__left'>
            <View className='tab_inner_item__left_title'>年薪</View>
            <View className='tab_inner_item__left_sub'>(税前)</View>
          </View>
          <View className='tab_inner_item__right_container'>

            <Input
              className='tab_inner_item__right'
              placeholderClass='tab_inner_item__right_place_holder'
              type='number'
              placeholder='请输入'
            />
          </View>
        </View>
      </View>
    );

    return (
      <ScrollView scrollY scrollWithAnimation className='scroll_container'>
        <Image src={newAddPng} className='image_banner'/>
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
            {monthLayout}

          </AtTabsPane>
          <AtTabsPane current={this.state.currentTab} index={1}>
            {yearLayout}
          </AtTabsPane>
        </AtTabs>
        <Image src={divider} className='image_divider'/>
        <ItemInput
          mainTitle='是否有租房支出'
          subTitle='抵扣金额'
          subValue='1000元/月'
          tips='住房租金根据纳税人承租住房所在城市的不同，按每月800元到1200元定额扣除；'/>
        <ItemInput
          mainTitle='是否有房贷支出'
          subTitle='抵扣金额'
          subValue='1000元/月'
          tips='纳税人本人或配偶发生的首套住房贷款利息支出，可按每月1000元定额扣除；'/>
        <ItemInput
          mainTitle='是否有子女教育支出'
          subTitle='抵扣金额'
          subValue='2000元/月'
          tips='纳税人的子女接受学前教育和学历教育的相关支出，按每个子女每年1.2万元（每月1000元）标准定额扣除。'/>
        <ItemInput
          mainTitle='是否有赡养老人的支出'
          subTitle='抵扣金额'
          subValue='2000元/月'
          tips='纳税人赡养60岁(含)以上父母的，按照每月2000元标准定额扣除'/>
        <ItemInput
          mainTitle='是否有医疗费用支出'
          subTitle='抵扣金额'
          subValue='0'
          tips='纳税人在一个纳税年度内发生的自付医药费用超过1.5万元部分，可在每年6万元限额内据实扣除；'/>

        <ItemInput
          mainTitle='是否有继续教育支出'
          subTitle='抵扣金额'
          subValue='400元/月'
          tips='纳税人接受学历或非学历继续教育的支出，在规定期间可按每年3600元或4800元定额扣除；'/>

        <Button className='submit_button' onClick={this.onSubmit}>马上计算</Button>
      </ScrollView>
    )
  }
}


// 请输入有教育支出的子女数
// 2
// 个
//
//
//
//
//
//
//
//
// 实际支出金额
// 元
//
//
//
//
//
//
//
//





