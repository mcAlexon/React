import React from 'react';
import ReactDOM from 'react-dom/client';
import {restaurants} from "./constants/mock";

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement)

root.render(
    <button id="myButton" onClick={() =>{
        console.log("Hello!");
    }}>
        <span>Click</span>
        <span>{restaurants[0].name}</span>
    </button>
);
