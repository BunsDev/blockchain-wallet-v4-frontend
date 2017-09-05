import React from 'react'
import styled from 'styled-components'

const BaseTextAreaInput = styled.textarea`
  display: block;
  width: 100%;
  padding: 6px 12px;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 1.42;
  color:  ${props => props.theme['text']};
  background-color:  ${props => props.theme['white']};
  background-image: none;
  outline-width: 0;
  user-select: text;
  border: 1px solid  ${props => props.theme[props.borderColor]};

  &::-webkit-input-placeholder {
    color: ${props => props.theme['text']};
  }
`

const selectBorderColor = (state) => {
  switch (state) {
    case 'initial': return 'midgrey'
    case 'invalid': return 'invalidred'
    case 'valid': return 'green'
    default: return 'midgrey'
  }
}

const TextAreaInput = props => {
  const { errorState, ...rest } = props
  const borderColor = selectBorderColor(errorState)

  return <BaseTextAreaInput borderColor={borderColor} {...rest} />
}

export default TextAreaInput
