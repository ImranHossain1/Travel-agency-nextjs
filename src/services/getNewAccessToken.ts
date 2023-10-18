export const getNewAccessToken = async (token: string) => {
  try {
    const res = await fetch(`http://localhost:5000/api/v1/auth/refresh-token`, {
      method: "POST",
      body: JSON.stringify({ refreshToken: token }),
      headers: { "content-type": "application/json", Authorization: token },
    });
    const data = await res.json();

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
