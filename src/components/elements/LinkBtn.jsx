import { Link } from "react-router-dom";

const LinkBtn = ({
  path,
  disabled,
  label,
  classBtn,
  onClick,
  replace,
  state,
}) => {
  return (
    <Link
      to={path}
      onClick={onclick}
      className={`${classBtn}`}
      disabled={disabled}
      replace={replace}
      state={state}
    >
      {label}
    </Link>
  );
};

export default LinkBtn;
