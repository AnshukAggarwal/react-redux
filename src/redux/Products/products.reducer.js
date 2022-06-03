const initialState = {
  products: [
    {
      id: 1,
      title: "Test",
      price: 6,
      description: "Test Description",
      quantity: 1,
    },
    {
      id: 2,
      title: "Test 2",
      price: 10,
      description: "Test Description 2",
      quantity: 1,
    },
    {
      id: 3,
      title: "Test 2",
      price: 10,
      description: "Test Description 2",
      quantity: 1,
    },
  ],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
