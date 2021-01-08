import React from "react"

import { Container } from "./styles"

interface Props {
  message?: string
}

const SuccessAlert: React.FC<Props> = ({ message }) => <Container>{message}</Container>

export default SuccessAlert
