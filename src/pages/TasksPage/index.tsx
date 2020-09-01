import React from "react"

import PageTitle from "../../components/shared/PageTitle"

import { Container } from "./styles"

const TasksPage: React.FC = () => (
  <Container className="TasksPage">
    <PageTitle>Todo App | Tasks</PageTitle>
  </Container>
)

export default TasksPage
