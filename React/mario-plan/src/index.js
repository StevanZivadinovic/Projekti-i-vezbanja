import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux'//ovo applyMiddleware, je dodato zbog thunk-a
import rootReducer from './components/store/reducers/rootReducer';
import {Provider} from 'react-redux';//ovo sluzi da spoji react i redux, to je kao neki povezujuci sloj
import thunk from 'redux-thunk';
import {reduxFirestore, getFirestore} from 'redux-firestore';
import {reactReduxFirestore, getFirebase} from 'react-redux-firebase';
import fbConfig from './components/config/fbConfig';

let store = createStore(rootReducer, 
  compose(applyMiddleware(thunk.withExtraArgument( { getFirebase, getFirestore } ))),
  reduxFirestore(),
  reactReduxFirestore()
  );

ReactDOM.render(
  <React.StrictMode><Provider store={store}><App /></Provider>
 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
