import "./Buttons.scss";
export default (props) => {
  const { className, label, children, onClick, disabled } = props;
  return (
    <button
      className='button'
      title={label}
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
