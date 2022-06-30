const SuccessMessage: React.FC<{message:string}> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="alert alert-success">
      <div>
        success:
        <label>{message}</label>
      </div>
    </div>
  );
}
export default SuccessMessage