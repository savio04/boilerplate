import { HTMLAttributes, ReactNode } from 'react'
import { ButtonPrimary } from './styles'

interface ButtonProps extends HTMLAttributes<HTMLInputElement> {
  children: ReactNode
}

export function Button({ children, ...rest }: ButtonProps) {
  return <ButtonPrimary {...rest}>{children}</ButtonPrimary>
}
