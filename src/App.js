import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import  routes  from './router/index';
import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';
import store from './store/index'
import { Provider } from 'react-redux';
import Player from './pages/player/app-player-bar/index'
export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
      <AppHeader/>
      {renderRoutes(routes)}
      <AppFooter/>
      </HashRouter>
      <Player/>
      </Provider>
  )
})

