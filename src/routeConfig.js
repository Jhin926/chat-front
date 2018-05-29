import index from '';


const routeConfig = [
  {
    path: '/',
    component: App,
    indexRoute: {component: Dashboard},
    childRoutes: [
      {path: 'about', component: About},
      {
        path: 'inbox',
        component: Inbox,
        childRoutes: [
          {path: '/messages/:id', component: Message}
        ]
      }
    ]
  }
];

export default routeConfig;