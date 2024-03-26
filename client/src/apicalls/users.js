const { apiRequest } = require(".");

export const RegisterUser = async (payload) => apiRequest('post', 'http://localhost:5000/api/users/register', payload);
export const LoginUser = async (payload) => apiRequest('post', 'http://localhost:5000/api/users/login', payload);