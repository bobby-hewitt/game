import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  StatusBar
} from 'react-native';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import Menu from './containers/Menu'
import Home from './containers/Home'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

function configureStore(initialState){
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware
    )
  )
  let store = createStore(persistedReducer, initialState, enhancer)
  let persistor = persistStore(store)
  return { store, persistor }
}



const store = configureStore({
  //provide initial state here
})

const App = () =>(
  <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
    <StatusBar hidden={true} />
      <NavigatorIOS
        initialRoute={{
          component: Menu,
          navigationBarHidden: true,
          title: 'My Initial Scene',
        }}
        style={{flex: 1}}
      />
    </PersistGate >
  </Provider>
)

export default App
