const { apiRequest } = require(".");

export const RegisterUser = async (payload) => apiRequest('post', 'http://localhost:5000/api/users/register', payload);
export const LoginUser = async (payload) => apiRequest('post', 'http://localhost:5000/api/users/login', payload);
export const GetLoggedInUser=async()=>apiRequest('get','http://localhost:5000/api/users/get-logged-in-user')