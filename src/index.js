import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import store from './store';

const todoChangeHandler = (val) => store.dispatch({type: 'CURRENT_UPDATE', payload: val})

const render = () => {
  const state = store.getState();
  //using the getState method to get the global state out of the store

  ReactDOM.render(<App todos={state.todos}
    currentTodo={state.currentTodo}
    changeCurrent={todoChangeHandler} />,
    document.getElementById('root'));
}

render();

store.subscribe(render);
//subscribing to changes in the store, calls render through the subscribe method

registerServiceWorker();
