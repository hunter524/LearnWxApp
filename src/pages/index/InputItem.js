import Taro, {Component} from '@tarojs/taro'
import {View, Text, ScrollView, Button, Input} from '@tarojs/components'
import ReactPropTypes from 'prop-types'
import './index.scss'

export default class InputItem extends Component {

  constructor(props) {
    super(props)
  }

  innerInputHandler(e){
    this.props.inputHandler(this.props.type,e)
  }

  render() {
    return (
      <View className='item_input_container'>
        <Text className='item_label_prefix'>{this.props.title}</Text>
        <Input placeholder={this.props.inputPlaceHolder} type='digit' confirmType={this.props.isLast?'done':'next'} className='item_input' onInput={this.innerInputHandler} />
        <Text className='item_label_suffix'>{this.props.suffix}</Text>
      </View>
    )
  }

}

InputItem.propTypes = {};
InputItem.defaultProps = {
  inputHandler: function (type,value) {
    console.log(type,value.value);
  },
  title: "未输入标题",
  suffix: ".00 (元)",
  inputPlaceHolder: "请填写占位符",
  type: "default",
  isLast:false,
};
