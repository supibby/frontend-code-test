// types.ts

import { ReactNode, ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'primary-outline' | 'secondary-outline'
  icon?: ReactNode
  loading?: boolean
}
