export const USER_NAME = 'USER_NAME'


export function setUserInfo(user) {
  return (dispatch, getState)=> {
    dispatch({
      type: USER_NAME,
      data: user
    })
  }
}

