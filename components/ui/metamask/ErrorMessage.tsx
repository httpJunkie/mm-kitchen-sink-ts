import { AiFillWarning } from "react-icons/ai"

interface ErrorMessageProps {
  message: string
}
 
 const ErrorMessage = ({ message }: ErrorMessageProps) => {
  if (!message) return null

  return (
    <div className="alert alert-error">
      <div>
        <AiFillWarning /> <label>{message}</label>
      </div>
    </div>
  )
}

export default ErrorMessage