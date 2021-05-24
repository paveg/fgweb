export type ButtonProps = {
  apperance: 'primary' | 'secondary' | 'error' | 'neutral' | 'tertiary'
  small?: boolean
  onClick?: React.MouseEventHandler
  disabled?: boolean
}

const primaryColor =
  'border-green-500 bg-green-500 hover:bg-green-600 text-white border'
const secondaryColor =
  'border-yellow-500 bg-yellow-500 hover:bg-yellow-600 text-white border'
const errorColor =
  'border-red-500 bg-red-500 hover:bg-red-600 text-white border'
const neutralColor =
  'border-gray-200 bg-gray-200 hover:bg-gray-300 text-black-900 border'
const tertiaryColor = 'hover:bg-gray-200 text-gray-900'

export const Button: React.FC<ButtonProps> = ({
  apperance,
  small,
  onClick,
  disabled,
  children,
}): JSX.Element => {
  let color: string
  switch (apperance) {
    case 'primary':
      color = primaryColor
      break
    case 'secondary':
      color = secondaryColor
      break
    case 'error':
      color = errorColor
      break
    case 'neutral':
      color = neutralColor
      break
    case 'tertiary':
      color = tertiaryColor
      break
    default:
      color = primaryColor
      break
  }
  const sizeClass = small ? 'px-4 py-2 text-xs' : 'px-6 py-3 text-sm'

  return (
    <button
      type="button"
      onClick={(e: React.MouseEvent): void => {
        disabled ? e.preventDefault() : onClick && onClick(e)
      }}
      disabled={disabled && true}
      className={`${color} ${sizeClass} disabled:opacity-60 m-1 rounded-md transition duration-500 ease select-none focus:outline-none focus:shadow-outline`}
    >
      {children}
    </button>
  )
}
