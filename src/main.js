import './styles/app.css';

import { App } from './app.component';

document.querySelector('#app').innerHTML = App({ title: 'todos' });
