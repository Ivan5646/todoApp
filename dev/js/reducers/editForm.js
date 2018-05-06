const inittialState = null;

const editForm = (state = inittialState, action) => {
  switch (action.type) {
    case 'GET_ITEM':
      return action.payload;
  }
  return state;
}

export default editForm
