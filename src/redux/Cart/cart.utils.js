export const addItemToCart = (cartItems, itemToAdd) => {
  const itemExistsInCart = cartItems.find((item) => item.id === itemToAdd.id);
  if (itemExistsInCart) {
    return cartItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const itemExistsInCart = cartItems.find(
    (item) => item.id === itemToRemove.id
  );
  if (itemExistsInCart.quantity === 1) {
    //remove the item from cart
    return cartItems.filter((item) => item.id !== itemToRemove.id);
  }
  return cartItems.map((item) =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
