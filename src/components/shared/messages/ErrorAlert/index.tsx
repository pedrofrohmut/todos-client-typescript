import React from "react"

import { Container } from "./styles"

interface Props {
  message?: string
}

const ErrorAlert: React.FC<Props> = ({ message }) => <Container>{message}</Container>

export default ErrorAlert
