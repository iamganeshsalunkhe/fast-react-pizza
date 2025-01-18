/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../services/apiRestaurant";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import { getUser } from "../user/userSlice";
import { getCart } from "../cart/cartSlice";


// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );


function CreateOrder() {
  const username = useSelector(getUser);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const formErrors = useActionData();

  // const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector(getCart);

  return (
    <div className="px-4 py-6">
      <h2 className="text-xl font-semibold mb-8">Ready to order? Let&apos;s go!</h2>

      <Form method="POST" action="/order/new">
        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input className="input grow" type="text" name="customer" defaultValue={username} required />
        </div>

        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
          {formErrors?.phone && <p className="text-sm mt-2 text-red-500 bg-red-100 p-2 rounded-md">{formErrors.phone}</p>}
          </div>
        </div>

        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input type="text " name="address" required
            className="input w-full"/>
          </div>
        </div>

        <div className="mb-12 flex gap-5">
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring 
            focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority"
          className="font-medium"
          >Want to yo give your order priority?</label>
        </div>

        <div>
          <input type='hidden' name= 'cart' value={JSON.stringify(cart)}/>
          <Button disabled={isSubmitting } type='Primary'>{isSubmitting ? 'Placing order...':'Order now'}</Button>
        </div>
      </Form>
    </div>
  );
}


// eslint-disable-next-line react-refresh/only-export-components
export  async function action({request}){
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    
    const order = {
      ...data,
      cart:JSON.parse(data.cart),
      priority:data.priority === 'on'
    }

    const errors ={};

    if (!isValidPhone(order.phone))
      errors.phone ='Please submit correct phone number!!';

    if (Object.keys(errors).length > 0) return errors;
    
    const newOrder = await createOrder(order);

    return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
