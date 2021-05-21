
type Props = {
  apperance: 'primary' | 'secondary' | 'error'
  onClick?: () => void,
}

const primaryColor = 'border-green-500 bg-green-500 hover:bg-green-600'
const secondaryColor = 'border-yellow-500 bg-yellow-500 hover:bg-yellow-600'
const errorColor = 'border-red-500 bg-red-500 hover:bg-red-600'

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
    default:
      color = primaryColor
      break
  }

  return <button
    type="button"
    onClick={onClick}
    className={`${color} border text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none focus:outline-none focus:shadow-outline`}>
    {children}
  </button>
}
