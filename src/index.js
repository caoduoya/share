import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');

/**18版本 */
const root = ReactDOM.createRoot(container);
root.render(<App />);

/**18版本之前 */
// ReactDOM.render(<App />, container)



reportWebVitals();
