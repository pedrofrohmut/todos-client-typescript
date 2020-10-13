import React from "react"

import { Container } from "./styles"

interface Props {
  isActive?: boolean
}

const FormTab: React.FC<Props> = ({ children, isActive }) => (
  <Container isActive={isActive}>{children}</Container>
)

export default FormTab
