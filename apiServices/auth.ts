import api from "@/lib/axiosInstance";
import { SignupFormData } from "@/app/signup/signupSchema";

export const registerUser = async (data: SignupFormData) => {
  const response = await api.post("/api/auth/local/register", data);
  return response.data;
};
