import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 
/*<App /> (사용자 정의 태그를 의미한다.) 과 스펠링이 같아야 함*/
/*'./App' 는 ./App.js 를 의미한다.*/
import reportWebVitals from './reportWebVitals';


ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
