import React from 'react'
import { View, SafeAreaView } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import { Header } from './components/common'

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <SafeAreaView>
        <View>
          <Header title='Tech Stack' />
        </View>
      </SafeAreaView>
    </Provider>
  );
}

export default App