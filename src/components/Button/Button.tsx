// Button.tsx

import { ButtonProps } from './types'

const Button = ({
  children,
  variant,
  icon,
  loading,
  disabled,
  onClick,
  ...props
}: ButtonProps) => {
  const baseClasses = ['button', `button--${variant}`]
  if (loading) baseClasses.push('button--loading')

  return (
    <button
      className={baseClasses.join(' ')}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {icon && (
        <span className="button__icon">
          <svg
            viewBox="0 0 25 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.5 24C19.1274 24 24.5 18.6274 24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24ZM16.8938 7.15165C17.433 6.61612 18.3072 6.61612 18.8463 7.15165C19.3855 7.68718 19.3855 8.55545 18.8463 9.09098L11.0363 16.8483C10.5361 17.3452 9.74752 17.381 9.20564 16.9559C9.1634 16.9228 9.12266 16.8869 9.08368 16.8482L6.15493 13.9392C5.61576 13.4037 5.61576 12.5354 6.15492 11.9999C6.69409 11.4643 7.56826 11.4643 8.10743 11.9999L10.0601 13.9393L16.8938 7.15165Z"
              fill="currentColor"
            />
          </svg>
        </span>
      )}
      {children}
    </button>
  )
}

export default Button
