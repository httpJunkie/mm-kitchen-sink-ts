const Button = ({
  marginTop = false,
  marginBottom = false,
  children,
  handleClick = null
}: any) => {
  return (
    <button
      className={`mm-button btn-rounded ${marginBottom ? 'btn-marginBottom' : null} ${marginTop ? 'btn-marginTop' : null}`} onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button