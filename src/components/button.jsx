const Button = (props) => {
  return (
    <button
      onClick={props.handleClick}
      className={`${
        props.isSmall ? "h-[32px] py-1 px-3 text-xs" : "h-10 py-2 px-4"
      }
      ${
        props.isActive 
          ? "bg-[#3c82f6] text-white" 
          : props.isGray 
            ? "bg-[#f3f4f6] text-[#363636]" 
            : "bg-[#3c82f6] text-white"
      } rounded-md`}
    >
      {props.text}
    </button>
  );
};
export default Button;
