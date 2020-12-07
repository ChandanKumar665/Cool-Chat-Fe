import { ContactService } from '../../Services/Contact/ContactService'
import { DashboardConstant } from './DashboardConstant'

const getContactList = userId => async dispatch => {
  ContactService.getContactList(userId)
    .then(res => {
      const { data } = res
      if (res.status) {
        dispatch({
          type: DashboardConstant.CONTACT_LIST_SUCCESS,
          payload: data.data
        })
      }
    })
    .catch(err => {
      dispatch({
        type: DashboardConstant.CONTACT_LIST_ERROR,
        payload: err.message || 'Error'
      })
    })
}

export const DashboardAction = { getContactList }
