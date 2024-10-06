// types.ts

import { ReactNode, ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'primary-outline' | 'secondary-outline'
  icon?: string | React.ComponentType<React.SVGProps<SVGSVGElement>>
  loading?: boolean
}
