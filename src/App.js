import React from 'react';
import Layout from './hoc/layout/Layout'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import Quiz from './containers/quiz/quiz'
import QuizList from './containers/QuizList/QuizList'
import About from './containers/About/About'
import Auth from './containers/Auth/Auth'
import QuizCreator from './containers/QuizCreator/QuizCreator'
import { connect } from 'react-redux'
import './App.css';
import Logout from './components/Logout/Logout';
import { autoLogin } from './store/actions/auth';

class App extends React.Component {

  componentDidMount() {
    this.props.autoLogin()
  }

  render() {
    let routes = (
      <Switch>
        <Route path = '/auth' component = {Auth}/>
        <Route path = '/quiz-creator' component = {QuizCreator}/>
        <Route path = '/quiz/:id' component = {Quiz}/>
        <Route path = '/about' component = {About}/>
        <Route path = '/' exact component = {QuizList}/>
        <Redirect to = '/' />
      </Switch>
    )
  
    if(this.props.isAuth) {
      routes = (
        <Switch>
          <Route path = '/quiz-creator' component = {QuizCreator}/>
          <Route path = '/quiz/:id' component = {Quiz}/>
          <Route path = '/about' component = {About}/>
          <Route path = '/logout' component = {Logout}/>
          <Route path = '/' exact component = {QuizList}/>
          <Redirect to = '/' />
        </Switch>
      ) 
    } else {
      routes = <Switch>
        <Route path = '/auth' component = {Auth}/>
        <Route path = '/quiz/:id' component = {Quiz}/>
        <Route path = '/about' component = {About}/>
        <Route path = '/' exact component = {QuizList}/>
        <Redirect to = '/' />
     </Switch>
    }
  
    return (
        <Layout>
          {routes}
        </Layout>
    );
  }

}

function mapStateToProps(state) {
  return {
    isAuth: !!state.auth.token

  }
}

function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
