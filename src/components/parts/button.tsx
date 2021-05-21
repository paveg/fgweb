
type Props = {
  apperance: 'primary' | 'secondary' | 'error' | 'neutral'
  onClick?: () => void,
}

const primaryColor = 'border-green-500 bg-green-500 hover:bg-green-600 text-white'
const secondaryColor = 'border-yellow-500 bg-yellow-500 hover:bg-yellow-600 text-white'
const errorColor = 'border-red-500 bg-red-500 hover:bg-red-600 text-white'
const neutralColor = 'border-gray-200 bg-gray-200 hover:bg-gray-300 text-black-900'

export const Button: React.FC<Props> = ({ apperance, onClick, children }): JSX.Element => {
  let color: string
  switch (apperance) {
    case 'primary':
      color = primaryColor
      break
    case "secondary":
      color = secondaryColor
      break
    case 'error':
      color = errorColor
      break
    case 'neutral':
      color = neutralColor
      break
    default:
      color = primaryColor
      break
  }

  return <button
    type="button"
    onClick={onClick}
    className={`${color} border rounded-md px-4 py-2 m-2 transition duration-500 ease select-none focus:outline-none focus:shadow-outline`}>
    {children}
  </button>
}
