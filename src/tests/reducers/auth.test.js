import auth from '../../reducers/auth';
import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
  const action = { 
    type: 'LOGIN', 
    uid: 'TESTUID1234' 
  }
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});


test('should clear uid for logout', () => {
  const action = { type: 'LOGOUT' }
  const state = authReducer({ uid: 'TESTUID1234' }, action);
  expect(state).toEqual({});
});