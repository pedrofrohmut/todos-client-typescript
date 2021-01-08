import React from "react"

import Spinner from "../../../images/Loading_icon.gif"

import { Container } from "./styles"

interface Props {
  message?: string
}

const LoadingSpinner: React.FC<Props> = ({ message }) => (
  <Container>
    <img src={Spinner} alt="loading spinner" />
    <p>{message}</p>
  </Container>
)

export default LoadingSpinner
