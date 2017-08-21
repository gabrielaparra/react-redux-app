import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import store from './store';
import {updateCurrent} from './reducers/todo';
import {bindActionCreators} from 'redux';

const actions = bindActionCreators({
  updateCurrent
  //updateCurrent is both the key and the value --> updateCurrent: updateCurrent
}, store.dispatch)

const render = () => {
  const state = store.getState();
  //using the getState method to get the global state out of the store

  ReactDOM.render(<App todos={state.todos}
    currentTodo={state.currentTodo}
    changeCurrent={actions.updateCurrent} />,
    document.getElementById('root'));
}

render();

store.subscribe(render);
//subscribing to changes in the store, calls render through the subscribe method

registerServiceWorker();
