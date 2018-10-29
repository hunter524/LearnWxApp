import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/result/result'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarTitleText: '投资账本',
      navigationBarBackgroundColor: '#ff5341',
      navigationBarTextStyle: 'white',
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
