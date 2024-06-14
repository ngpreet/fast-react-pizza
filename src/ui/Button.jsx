import * as PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const base = `inline-block rounded-full bg-yellow-400 font-semibold uppercase text-stone-800
    transition-colors duration-300 hover:bg-yellow-300 cursor-pointer focus:bg-yellow-300 focus:outline-none
    focus:ring focus:ring-yellow-300 focus:ring-offset-1 disabled:cursor-not-allowed`;
  const styles = {
    primary: base + " px-4 py-3",
    small: base + " px-2 py-1 text-xs",
    secondary: `inline-block rounded-full font-semibold uppercase text-stone-400 border-2 border-stone-300
    transition-colors duration-300 hover:bg-stone-300 hover:text-stone-600 cursor-pointer focus:bg-stone-300 focus:outline-none
    focus:ring focus:ring-stone-300 focus:ring-offset-1 disabled:cursor-not-allowed px-4 py-3`,
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
