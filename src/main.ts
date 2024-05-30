import { createApp } from 'vue';
import {
  Button,
  Card,
  ConfigProvider,
  Form,
  Input,
  Spin,
  Checkbox,
  Modal,
  Space,
} from 'ant-design-vue';
import dayjs from 'dayjs';
import App from './App.vue';
import 'ant-design-vue/dist/reset.css';
import './assets/css/main.scss';
import 'animate.css';
import router from './router';
import { registerGlobalComponent } from './global';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUserSecret);

const app = createApp(App);
app.use(router);
app.use(registerGlobalComponent);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(Button);

app.use(Checkbox);
app.use(Input);
app.use(Form);
app.use(Card);
app.use(Spin);
app.use(Modal);
app.use(Space);

// app.use(CanvasJSChart);
app.use(ConfigProvider);
app.config.globalProperties.$dayjs = dayjs;

app.mount('#app');

const channel = new BroadcastChannel('reload');
channel.onmessage = function (event) {
  if (event.data === 'reload') {
    window.location.reload();
  }
};
