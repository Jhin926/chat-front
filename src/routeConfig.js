import Login from './login.jsx';
import register from './register.jsx';

const routeConfig =[
  {
    path: '/',
    component: Login
  },
  {
    path: '/register',
    component: register
  }
];

const Root = ({ route }) => (
  <div>
    <h1>Root</h1>
    {renderRoutes(route.routes)}
  </div>
);

export default routeConfig;