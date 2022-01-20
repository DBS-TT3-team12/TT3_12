const ROOT_URL = "http://127.0.0.1:5000";

// working
export async function loginUser(dispatch, data) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  try {
    dispatch({ type: "REQUEST_LOGIN" });
    let response = await fetch(`${ROOT_URL}/login`, requestOptions);
    let res = await response.json();

    if (res.access_token) {
      const payload = { user: data.user, token: res.access_token };
      dispatch({
        type: "LOGIN_SUCCESS",
        payload,
      });
      localStorage.setItem("currentUser", JSON.stringify(payload));
      return payload;
    }

    dispatch({ type: "LOGIN_ERROR", error: res.msg });
    return;
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", error: error });
  }
}

// frontend test
// export async function loginUser(dispatch, payload) {
//   try {
//     dispatch({ type: "REQUEST_LOGIN" });

//     if (payload.user === "admin" && payload.password === "password") {
//       dispatch({ type: "LOGIN_SUCCESS", payload: { user: payload.user, token: payload.password } });

//       return true;
//     }
//     dispatch({ type: "LOGIN_ERROR", error: "The username and password does not match." });
//     return;
//   } catch (error) {
//     // no need to check
//   }
// }

export async function logout(dispatch) {
  dispatch({ type: "LOGOUT" });
  localStorage.removeItem("currentUser");
  localStorage.removeItem("token");
}
