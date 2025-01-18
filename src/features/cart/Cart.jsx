import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import LinkButton from '../../ui/LinkButton';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import { clearCart, getCart } from './cartSlice';
import { getUser } from '../user/userSlice';

function Cart() {
  const username = useSelector(getUser);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart/>
  return (
    <div className='px-4  py-3 '>
      <LinkButton to="/menu" className='text-sm text-blue-500 hover:text-blue-800'>&larr; Back to menu</LinkButton>

      <h2 className='mt-7 text-xl font-semibold'>Your cart, {username}</h2>

      <ul className='divide-y divide-stone-200 border-b mt-3'>
        {cart.map(item=><CartItem item={item} key={item.key}/>
      )}
      </ul>
      <div className='mt-6 space-x-'>
        <Button  to="/order/new" type='primary'>Order pizzas</Button>
        {<Button type='secondary' onClick={()=>dispatch(clearCart())}>Clear cart</Button> }
      </div>
    </div>
  );
}

export default Cart;
