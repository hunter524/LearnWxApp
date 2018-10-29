import Taro, {Component} from '@tarojs/taro'
import {View, Text, ScrollView, Button, Input} from '@tarojs/components'
export default class Result extends Component {

  onBack(){
    Taro.navigateBack()
  }

  render() {
    //参数可以在跳转到的Component的生命周期的函数中通过 this.$router.params 获取到
    console.log(this.$router.params);
    return (
      <View className='container'>
        <Text className='text'>
          I am First!
        </Text>
        <Button onClick={this.onBack}>Back ResSet</Button>
      </View>
    )
  }

}
