import { AiFillCheckCircle } from "react-icons/ai"

interface SuccessMessageProps {
  message: string
}

const SuccessMessage = ({ message }: SuccessMessageProps) => {
  if (!message) return null

  return (
    <div className="alert alert-success">
      <div>
        <AiFillCheckCircle /> <label>{message}</label>
      </div>
    </div>
  )
}
export default SuccessMessage