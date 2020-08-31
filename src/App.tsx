import React from "react"
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom"

import TasksPage from "./pages/TasksPage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import TodosPage from "./pages/TodosPage"
import AddTodoPage from "./pages/AddTodoPage"
import EditTodoPage from "./pages/EditTodoPage"

import { Container, Content, Footer } from "./styles"

// TODO: Add GuestRoute and UserRoute

const App: React.FC = () => (
  <Router>
    <Container className="App">
      <Content>
        <Switch>
          <Route path="/" exact>
            <TasksPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/tasks/:id/todos">
            <TodosPage />
          </Route>
          <Route path="/addtodo">
            <AddTodoPage />
          </Route>
          <Route path="/edittodo/:id">
            <EditTodoPage />
          </Route>
        </Switch>
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

export default App
