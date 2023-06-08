import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { inputHelper } from '../../../../Helper';
import { cartItemModel } from '../../../../Interfaces';
import { RootState } from '../../../../Storage/Redux/store';
import { MiniLoader } from '../Common';

const CartPickUpDetails = () => {
  const shoppingCartFromStore: cartItemModel[] = useSelector(
    (state: RootState) => state.shoppingCartStore.cartItems ?? []
  );

  let grandTotal = 0;
  let totalItems = 0;

  const initialUserData = {
    name: '',
    email: '',
    phoneNumber: '',
  };

  shoppingCartFromStore?.map((cartItem: cartItemModel) => {
    totalItems += cartItem.quantity ?? 0;
    grandTotal += (cartItem.menuItem?.price ?? 0) * (cartItem.quantity ?? 0);
    return true;
  });

  const [userInputs, setUserInputs] = useState(initialUserData);

  const [loading, setLoading] = useState(false);

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tempData = inputHelper(e, userInputs);
    setUserInputs(tempData);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <div className="border pb-5 pt-3">
      <h1 style={{ fontWeight: '300' }} className="text-center text-success">
        Pickup Details
      </h1>
      <hr />
      <form className="col-10 mx-auto" onSubmit={handleSubmit}>
        <div className="form-group mt-3">
          Pickup Name
          <input
            onChange={handleUserInput}
            value={userInputs.name}
            type="text"
            className="form-control"
            placeholder="name..."
            name="name"
            required
          />
        </div>
        <div className="form-group mt-3">
          Pickup Email
          <input
            onChange={handleUserInput}
            value={userInputs.email}
            type="email"
            className="form-control"
            placeholder="email..."
            name="email"
            required
          />
        </div>

        <div className="form-group mt-3">
          Pickup Phone Number
          <input
            onChange={handleUserInput}
            value={userInputs.phoneNumber}
            type="number"
            className="form-control"
            placeholder="phone number..."
            name="phoneNumber"
            required
          />
        </div>
        <div className="form-group mt-3">
          <div className="card p-3" style={{ background: 'ghostwhite' }}>
            <h5>Grand Total : ${grandTotal.toFixed(2)}</h5>
            <h5>No of items : {totalItems}</h5>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-lg btn-success form-control mt-3"
          disabled={loading}
        >
          {loading ? <MiniLoader color="#fff" /> : 'Looks Good? Place Order!'}
        </button>
      </form>
    </div>
  );
};

export default CartPickUpDetails;
