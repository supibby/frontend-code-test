// Button.test.tsx
import { render, fireEvent } from '@testing-library/react'
import Button from './Button'

const MockIcon = () => <svg data-testid="mock-icon" />

describe('Button', () => {
  test('button is disabled and does not trigger onClick when disabled prop is true', () => {
    const onClickMock = jest.fn()
    const { getByRole } = render(
      <Button disabled onClick={onClickMock}>
        Disabled Button
      </Button>
    )

    const buttonElement = getByRole('button', { name: 'Disabled Button' })

    expect(buttonElement).toBeDisabled()

    fireEvent.click(buttonElement)

    expect(onClickMock).not.toHaveBeenCalled()
  })

  test('button is correctly in a loading state', () => {
    const { container } = render(<Button loading>Loading</Button>)

    const buttonElement = container.querySelector('button')

    expect(buttonElement).toBeDisabled()
    expect(buttonElement).toHaveClass('button--loading')
  })

  test('renders button with icon correctly', () => {
    const { getByTestId, getByRole } = render(
      <Button icon={MockIcon}>Button with Icon</Button>
    )

    const iconElement = getByTestId('mock-icon')
    expect(iconElement).toBeInTheDocument()

    const buttonElement = getByRole('button')
    expect(buttonElement).toHaveClass('button--with-icon')
  })
})
