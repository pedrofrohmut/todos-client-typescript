import styled from "styled-components"

interface ContainerProps {
  isActive?: boolean
}

export const Container = styled.div<ContainerProps>`
  display: inline-block;
  padding: 0.6rem 1.2rem;
  border: 1px solid var(--grey8);
  border-bottom: 0;
  color: ${props => props.isActive ? "var(--grey2)" : "var(--grey5)"};
  background-color: ${props => props.isActive ? "var(--grey10)" : "var(--grey7)"};
`
