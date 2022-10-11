import React from 'react'

import { ButtonContainer } from './styles'

const Button = ({title, onclick}) => {
  return (
    <ButtonContainer onclick={onclick}>{title}</ButtonContainer>
  )
}


export { Button };