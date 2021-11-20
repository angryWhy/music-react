import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import  routes  from './router/index';
import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';
export default memo(function App() {
  return (
      <HashRouter>
      <AppHeader/>
      {renderRoutes(routes)}
      <AppFooter/>
      </HashRouter>
  )
})

