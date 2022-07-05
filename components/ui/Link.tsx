const Link = ({ link, name, children }: any) => {
  return (
    <a href={link} className="mm-link" rel="noopener noreferrer" target="_blank" title={`Link to ${name}`}>
      {children}
    </a>
  )
}

export default Link