import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className=" flex items-center justify-between bg-stone-700 text-stone-200 uppercase p-4">
      <p className="text-stone-300 font-semibold space-x-4">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to='/cart'>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
