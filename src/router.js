import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import LoadableComponent from '@/utils/LoadableComponent';
import BasicLayout from '@/components/BasicLayout';

const Login = LoadableComponent(() => import('@/pages/Login'));
const Home = LoadableComponent(() => import('@/pages/Home'));
const Register = LoadableComponent(() => import('@/pages/Register'));
const Articles = LoadableComponent(() => import('@/pages/Articles'));
const Authorization = LoadableComponent(() => import('@/pages/Authorization'));
const Carousel = LoadableComponent(() => import('@/pages/Carousel'));
const Questions = LoadableComponent(() => import('@/pages/Questions'));
const Users = LoadableComponent(() => import('@/pages/Users'));

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
          <Route
            path="/"
            render={() => (
              <BasicLayout >
                <Switch>
                  <Route path="/home" exact component={Home}/>
                  <Route path="/authorization" exact component={Authorization}/>
                  <Route path="/articles" exact component={Articles}/>
                  <Route path="/users" exact component={Users}/>
                  <Route path="/questions" exact component={Questions}/>
                  <Route path="/carousel" exact component={Carousel}/>
                  <Redirect to="/home"/>
                </Switch>
              </BasicLayout >
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Router;
