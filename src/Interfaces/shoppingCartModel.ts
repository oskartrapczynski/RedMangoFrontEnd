import cartItemModel from './cartItemModel';

export default interface shoppingCartModel {
  id?: number;
  userId?: number;
  cartItems?: cartItemModel[];
  cartTotal?: number;
  stripePaymentIntentId?: any;
  clientSecret?: any;
}
