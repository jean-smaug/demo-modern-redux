// actions
export const FETCH_USER_START = "user/FETCH_USER_START";
export const FETCH_USER_SUCCESS = "user/FETCH_USER_SUCCESS";

const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: FETCH_USER_START });

  const response = await fetch("http://jsonplaceholder.typicode.com/users");

  if (response.status !== 200) {
    throw new Error(response.statusText);
  }

  await new Promise((res) => {
    setTimeout(() => {
      res();
    }, 2000);
  });

  const users = await response.json();

  dispatch(fetchUserSuccess(users));
};
