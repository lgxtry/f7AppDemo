var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/about/',
        url: './ggpages/about.html',
      },{
        path:'/newsList',
        url:'./ggpages/news_list.html'
      },
      {
        path: '/newsList1/',
        componentUrl: './ggpages/news_list.html',
      },
    ],
    // ... other parameters
  });
  var mainView = app.views.create('.view-main');