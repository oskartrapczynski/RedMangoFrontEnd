import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const shoppingCartApi = createApi({
  reducerPath: 'shoppingCartApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://redmangoapi20230605165816.azurewebsites.net/api/',
  }),
  tagTypes: ['ShoppingCarts'],
  endpoints: (builder) => ({
    getShoppingCart: builder.query({
      query: (userId) => ({
        url: 'shoppingCart',
        params: {
          userId,
        },
      }),
      providesTags: ['ShoppingCarts'],
    }),
    updateShoppingCart: builder.mutation({
      query: ({ userId, menuItemId, updateQuantityBy }) => ({
        url: 'shoppingCart',
        method: 'POST',
        params: {
          userId,
          menuItemId,
          updateQuantityBy,
        },
      }),
      invalidatesTags: ['ShoppingCarts'],
    }),
  }),
});

export const { useGetShoppingCartQuery, useUpdateShoppingCartMutation } =
  shoppingCartApi;

export default shoppingCartApi;
