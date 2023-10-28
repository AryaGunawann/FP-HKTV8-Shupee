const Button = ({ name, style, onClick, disabled, htmlFor }) => {
  return (
    <button
      className="btn btn-success gap-2 w-40 text-white"
      style={style}
      onClick={onClick}
      disabled={disabled}
      htmlFor={htmlFor}
    >
      {name}
    </button>
  );
};

export default Button;
