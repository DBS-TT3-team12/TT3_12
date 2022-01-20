const ROOT_URL = "http://127.0.0.1:5000";

export async function viewAllPosts(token) {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    let response = await fetch(`${ROOT_URL}/allPost`, requestOptions);

    if (response.ok) {
      const result = await response.json();
      return result.result;
    }

    return false;
  } catch (error) {
    console.error("Error: allPost");
    return false;
  }
}

export async function addPost(token, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    let response = await fetch(`${ROOT_URL}/addPost`, requestOptions);

    if (response.ok) {
      return true;
    }

    return false;
  } catch (error) {
    console.error("Error: addPost");
    return false;
  }
}

export async function editPost(token, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    let response = await fetch(`${ROOT_URL}/editPost`, requestOptions);

    if (response.ok) {
      return true;
    }

    return false;
  } catch (error) {
    console.error("Error: editPost");
    return false;
  }
}

export async function deletePost(token, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    let response = await fetch(`${ROOT_URL}/deletePost`, requestOptions);

    if (response.ok) {
      return true;
    }

    return false;
  } catch (error) {
    console.error("Error: deletePost");
    return false;
  }
}
