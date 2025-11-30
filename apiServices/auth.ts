import api from "@/lib/axiosInstance";
import { SignupFormData } from "@/app/signup/signupSchema";

interface resetPasswordFormData {
  password: string;
  passwordConfirmation: string;
  code: string;
}

interface forgotPasswordFormData {
  email: string;
}
interface changePasswordFormData {
  currentPassword?: string;
  password?: string;
  passwordConfirmation?: string;
}

export const registerUser = async (data: SignupFormData) => {
  const response = await api.post("/api/auth/local/register", data);
  return response.data;
};

export const resetPassword = async (data: resetPasswordFormData) => {
  const response = await api.post("/api/auth/reset-password", data);
  return response.data;
};

export const forgotPassword = async (data: forgotPasswordFormData) => {
  const response = await api.post("/api/auth/forgot-password", data);
  return response.data;
};

export const changePassword = async (data: changePasswordFormData) => {
  const response = await api.post("/api/auth/change-password", data);
  return response.data;
};
