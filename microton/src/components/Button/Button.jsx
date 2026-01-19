import "./Buttons.scss";
export default (props) => {
  const { className, label, children, onClick } = props;
  return (
    <button
      className='button'
      title={label}
      aria-label={label}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
