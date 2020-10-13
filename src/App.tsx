import React, { useContext } from "react"
import { BrowserRouter as Router, Switch, Link } from "react-router-dom"

import { AppContext } from "./context/AppContext"

import GuestRoute from "./components/routes/GuestRoute"
import UserRoute from "./components/routes/UserRoute"

import TasksPage from "./pages/TasksPage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import TodosPage from "./pages/TodosPage"
import AddTodoPage from "./pages/AddTodoPage"
import EditTodoPage from "./pages/EditTodoPage"

import { Container, Content, Footer } from "./styles"

// TODO: Add GuestRoute and UserRoute

const App = () => {
  const { isAuthenticated } = useContext(AppContext)
  return (
    <Router>
      <Container className="App">
        <Content>
          <Switch>
            <UserRoute isAuthenticated={isAuthenticated} exact path="/">
              <TasksPage />
            </UserRoute>
            <GuestRoute isAuthenticated={isAuthenticated} exact path="/login">
              <LoginPage />
            </GuestRoute>
            <GuestRoute isAuthenticated={isAuthenticated} exact path="/signup">
              <SignUpPage />
            </GuestRoute>
            <UserRoute isAuthenticated={isAuthenticated} exact path="/tasks/:id/todos">
              <TodosPage />
            </UserRoute>
            <UserRoute isAuthenticated={isAuthenticated} exact path="/addtodo">
              <AddTodoPage />
            </UserRoute>
            <UserRoute isAuthenticated={isAuthenticated} exact path="/edittodo/:id">
              <EditTodoPage />
            </UserRoute>
          </Switch>
          <br />
          <br />
          <nav>
            <ul>
              <li>
                <Link to="/">Tasks</Link>
              </li>
              <li>
                <Link to="/login">Log in</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/tasks/:id/todos">Todos</Link>
              </li>
              <li>
                <Link to="/addtodo">Add Todo</Link>
              </li>
              <li>
                <Link to="/edittodo/:id">Edit Todo</Link>
              </li>
            </ul>
          </nav>
        </Content>
        <Footer>&copy; Pedro Frohmut 2020</Footer>
      </Container>
    </Router>
  )
}

export default App
