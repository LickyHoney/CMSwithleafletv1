import { userConstants } from '../../../constants/user.constants';
import { initialUserState } from '../../states/userState';

export function registration(state = initialUserState, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { 
        registering: true,
        registered: false,
        users: [
          ...state.users,
        ]
      };
    case userConstants.REGISTER_SUCCESS:
      return Object.assign({}, state, {
        registering: false,
        registered: true,
        users: [
            ...state.users,
            action.user
        ]
    });
    case userConstants.REGISTER_FAILURE:
      return {
        registering: false,
        registered: false,
      };
    default:
      return state
  }
}