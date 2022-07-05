const Button = ({
  marginTop = false,
  marginBottom = false,
  children,
  handleClick = null
}: any) => {
  return (
    <button
      className={`mm-button btn-rounded ${marginBottom ? 'btn-marginBottom' : marginTop ? 'btn-marginTop' : ''}`} 
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default Button