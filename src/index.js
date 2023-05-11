import React from 'react';
import {createRoot} from 'react-dom/client';
import {createElement, genGetID} from './utils.js';
import App from './app.js';
import Store from './store.js';

const store = new Store({
  list: [
    {code: genGetID.next().value, title: 'Название элемента'},
    {code: genGetID.next().value, title: 'Некий объект'},
    {code: genGetID.next().value, title: 'Заголовок'},
    {code: genGetID.next().value, title: 'Очень длинное название элемента из семи слов'},
    {code: genGetID.next().value, title: 'Запись'},
    {code: genGetID.next().value, title: 'Шестая запись'},
    {code: genGetID.next().value, title: 'Седьмая запись'},
  ]
});

const root = createRoot(document.getElementById('root'));

store.subscribe(() => {
  root.render(<App store={store}/>);
});

// Первый рендер приложения
root.render(<App store={store}/>);
