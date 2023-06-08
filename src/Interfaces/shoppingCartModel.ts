export default interface shoppingCartModel {
  id: number;
  userId: number;
  cartItems: any[];
  cartTotal: number;
  stripePaymentIntentId?: any;
  clientSecret?: any;
}
