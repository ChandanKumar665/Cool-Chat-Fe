import { ContactConstant } from './ContactConst'
//reducer will connect to the store
const reducer = (
  state = { isOpen: false, modalData: null, isLoaded: false },
  action
) => {
  const { type, payload } = action
  //define all the cases here
  switch (type) {
    case ContactConstant.TOGGLE_MODAL:
      return { ...state, isOpen: !state.isOpen, modalData: payload }
    case ContactConstant.CHAT_LIST_SUCCESS:
      return { ...state, chatList: payload }
    case ContactConstant.CHAT_LIST_ERROR:
      return { ...state, chatList: [] }

    default:
      return state
  }
}

export const ContactReducer = { reducer }
