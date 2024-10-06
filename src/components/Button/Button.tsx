// Button.tsx

import { ButtonProps } from './types'

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
  if (loading) baseClasses.push('button--loading')

  return (
    <button
      className={baseClasses.join(' ')}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <span className="button__loading-spinner">
          <svg className="spinner" viewBox="0 0 50 50">
            <circle
              className="path"
              cx="25"
              cy="25"
              r="20"
              fill="none"
              strokeWidth="5"
            ></circle>
          </svg>
        </span>
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
