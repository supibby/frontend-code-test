// Button.tsx

import { ButtonProps } from './types'
import Loader from '../Loader/Loader'

const Button = ({
  children,
  variant,
  icon: Icon,
  loading,
  disabled,
  onClick,
  ...props
}: ButtonProps) => {
  const baseClasses = ['button', `button--${variant}`]
  if (loading) baseClasses.push('button--loading')
  if (Icon) baseClasses.push('button--with-icon')

  return (
    <button
      className={baseClasses.join(' ')}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          {Icon && (
            <span className="button__icon">
              <Icon width={24} height={24} />
            </span>
          )}
          <span className="button__text">{children}</span>
        </>
      )}
    </button>
  )
}

export default Button
