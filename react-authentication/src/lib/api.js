export const signRequest = async (requestData) => {
  let endPoint;
  if (requestData.login) {
    endPoint =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA4hYny7LLFt-A0LWwkrb3_SWgCfpQR4Aw';
  } else {
    endPoint =
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA4hYny7LLFt-A0LWwkrb3_SWgCfpQR4Aw';
  }
  const payload = {
    email: requestData.email,
    password: requestData.password,
    returnSecureToken: true,
  };
  try {
    const response = await fetch(endPoint, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // It always returns some value whether error or not, thats why we are handling the error after paarsing data
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error.message);
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
