import './context'; 
import doraEvent from '@hellobikefe/dora/src/export//doraEvent'; 
import { Component } from 'react'
import { Provider } from 'mobx-react'

import counterStore from './store/counter'

import './app.less'

const store = {
  counterStore
}

class App extends Component {
  componentDidMount () {}

  componentDidShow () {
    doraEvent.emit({
      eventName : 'app:componentDidShow',
      args : {},
    });
  }

  componentDidHide () {
    doraEvent.emit({
      eventName : 'app:componentDidHide',
      args : {},
    });
  }

  componentDidCatchError () {}

  // this.props.children 就是要渲染的页面
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
