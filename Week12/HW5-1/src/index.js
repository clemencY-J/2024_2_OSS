import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // 필요에 따라 스타일링 파일
import App from './App'; // App.js에서 작성한 메인 컴포넌트
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap 스타일링 추가

const root = ReactDOM.createRoot(document.getElementById('root')); // HTML의 root에 연결
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
