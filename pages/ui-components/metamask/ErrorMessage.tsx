 const ErrorMessage: React.FC<{message:string}> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="alert alert-error">
      <div>
        ⚠️ <label>{message}</label>
      </div>
    </div>
  );
}

export default ErrorMessage