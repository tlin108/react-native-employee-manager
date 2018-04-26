import React from 'react'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'

import reducers from './reducers'
import Router from './Router'

const config = {
    apiKey: "AIzaSyBXpeLqaznAOB612_4K8Wyg6hmyDNXXmiI",
    authDomain: "manager-ab98f.firebaseapp.com",
    databaseURL: "https://manager-ab98f.firebaseio.com",
    projectId: "manager-ab98f",
    storageBucket: "manager-ab98f.appspot.com",
    messagingSenderId: "616576859616"
}

class App extends React.Component {
    componentWillMount() {
        firebase.initializeApp(config)
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

        return (
            <Provider store={ store }>
                <Router />
            </Provider>
        )
    }
}

export default App