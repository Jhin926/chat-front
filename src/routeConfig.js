import login from 'login.jsx';
import register from 'register.jsx';

const routeConfig = [
  {
    path: '/',
    component: login
  },
  {
    path: '/register',
    component: register
  }
];

export default routeConfig;