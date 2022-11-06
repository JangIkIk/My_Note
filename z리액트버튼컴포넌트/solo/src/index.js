import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import { legacy_createStore as createStore } from 'redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const increase = () => {
  return {
    type: 1,
  };
};

export const decrease = () => {
  return {
    type: 'DECREASE',
  };
};


const counterReducer = (state, action)=>{

  switch(action.type){
    case 1:
      return state + 1;
    
    case "DECREASE":
      return state - 1;

    case "SET_NUMBER":
      return action.payload;

    default :
      return state;
  }

}

const store = createStore(counterReducer, 1)
console.log(store.getState())


root.render(
    <Provider store={store}>
    <App />
    </Provider>
  
);


