import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

$(function() {
  ReactDOM.render(
    <App test={hello} />,
    document.getElementById('app')
  );
});
