import React from "react"

import PageTitle from "../../components/shared/PageTitle"

import { Container } from "./styles"

const TodosPage: React.FC = () => (
  <Container className="TodosPage">
    <PageTitle>Todo App | Todos</PageTitle>
  </Container>
)

export default TodosPage
