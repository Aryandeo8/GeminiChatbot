import  axios from "axios";
export const signupUser = async(email,password) => {
    axios.post('http://localhost:4000/api/user/register', { email, password })
    .then(result => {
      console.log(result.data);
      if (result.data.success) {
        console.log('Registration successful');
        navigate('/display');
      } else {
        console.log('Registration failed');
      }
    })
    .catch(err => {
      console.log('Error:', err);
    })
};
export const loginUser = async(email,password) => {
    axios.post('http://localhost:4000/api/user/login', { email, password })
            .then(result => {
              console.log(result.data);
              if (result.data.success) {
                console.log('Login successful');
                navigate('/display');
              } else {
                console.log('Login failed');
              }
            })
            .catch(err => {
              console.log('Error:', err);
            })
};

export const checkAuthStatus = async () => {
    const res = await axios.get("/user/auth-status");
    if (res.status !== 200) {
      throw new Error("Unable to authenticate");
    }
    const data = await res.data;
    return data;
};
  export const sendChatRequest = async (message) => {
    const res = await axios.post("/chat/new", { message });
    if (res.status !== 200) {
      throw new Error("Unable to send chat");
    }
    const data = await res.data;
    return data;
};
  export const getUserChats = async () => {
    const res = await axios.get("/chat/all-chats");
    if (res.status !== 200) {
      throw new Error("Unable to send chat");
    }
    const data = await res.data;
    return data;
};