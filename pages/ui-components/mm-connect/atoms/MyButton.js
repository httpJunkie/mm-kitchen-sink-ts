const MyButton = ({ children, handleClick = null }) => {
  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
}

export default MyButton