import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
function Button({children,disabled, to,type}) {

  const base ="bg-yellow-400 uppercase font-semibold bg-yellow-400 text-stone-800  inline-block rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed text-sm" ;

  const styles = {
    primary:base + ' px-4  py-2 md:px-6 md:py-4',
    small:base + ' px-4  py-2 md:px-5 md:py-2.5 text-xs',
    secondary:" uppercase font-semibold border-2 border-stone-300  text-stone-400  inline-block rounded-full hover:bg-stone-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-stone-200 focus:bg-stone-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4  py-2.5 md:px-6 md:py-3.5 hover:text-stone-800 focus:text-stone-800 text-sm"

  }
  
  if (to) return <Link to={to} className={styles[type]} >{children}</Link>;

    return (
            <button disabled={disabled} className={styles[type]}
            >{children}
            </button>
    )
}

export default Button
