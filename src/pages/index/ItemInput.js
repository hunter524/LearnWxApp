import Taro, {Component} from '@tarojs/taro'
import {Button, Image, ScrollView, View, Input} from '@tarojs/components'
import {AtCheckbox} from 'taro-ui'
import ReactPropTypes from 'prop-types'
import './index.scss'
import './ItemInput.scss'

export default class ItemInput extends Component {
  constructor(props) {
    super(props);
    this.state={
      selected:[],
    }
  }
  onChange(value){
    console.log(value)
    this.setState(
      {
        selected:value,
      }
    )
  }

  render() {
    return (
      <View className='item'>
        <View className='item__title'>
          <View className='item__title__text'>
            {this.props.mainTitle}
          </View>
          <AtCheckbox
            className='at-checkbox'
            options={[{value:"va"}]}
            selectedList={this.state.selected}
            onChange={this.onChange.bind(this)}
          />
        </View>

        <View className='item__content'>
          <View className='item__content__left_text'>
            {this.props.subTitle}
          </View>
          <View className='item__content__right_text'>
            {this.props.subValue}
          </View>
        </View>
        <View className='item__tips'>
          {this.props.tips}
        </View>

      </View>
    )
  }
}
// ItemInput.prototype = {
//   mainTitle: 'string',
//   subTitle: 'string',
//   subValue: 'string',
//   tips: 'string'
// };
ItemInput.defaultProps = {
  mainTitle: '2222222222222222',
  subTitle: '1111111111',
  subValue: '5555555555',
  tips: '6666666666',
  typeValue:'typeValue'
};
