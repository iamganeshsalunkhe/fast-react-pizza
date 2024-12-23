import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"

function Header() {
    return (
        <header className= "bg-yellow-500 uppercase px-4 py-3 border-b border-stone-400 ">
            <Link to ='/' className="tracking-widest" >Fast React Pizza Co. </Link>

        <SearchOrder/>
            <p>Ganesh</p>
        </header>
    )
}

export default Header
