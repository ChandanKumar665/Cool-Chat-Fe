import { ContactConstant } from './ContactConst'
//reducer will connect to the store
const reducer = (state = { isOpen: false, modalData: null }, action) => {
  const { type, payload } = action
  //define all the cases here
  switch (type) {
    case ContactConstant.TOGGLE_MODAL:
      return { ...state, isOpen: !state.isOpen, modalData: payload }

    default:
      return state
  }
}

export const ContactReducer = { reducer }
