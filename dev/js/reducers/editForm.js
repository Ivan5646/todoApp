const inittialState = "";

const editForm = (state = inittialState, action) => {
  switch (action.type) {
    case 'GET_EDIT_FORM_ID':
      return action.payload;
  }
  return state;
}

export default editForm
