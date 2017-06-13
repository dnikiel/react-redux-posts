import React, { Component } from 'react'
import './App.css'
import { Container } from 'muicss/react'
import PostsList from './containers/postsListContainer'
import PostPage from './containers/postPageContainer'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Container>
            <div className="App__header">
              <h1><Link to="/">React Redux Posts</Link></h1>
            </div>
            <Route exact path="/" component={PostsList}/>
            <Route path="/:postId" component={PostPage}/>
          </Container>
        </div>
      </Router>
    )
  }
}

export default App
