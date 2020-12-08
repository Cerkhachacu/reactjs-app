import axios from "axios";

const host = axios.create({
  baseURL: process.env.REACT_APP_HOST,
});

// type body
interface loginBody {
  email: string;
  password: string;
}
interface registerBody {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  cPassword: string;
  role: number;
}

const api = {
  getSeasons: () => host.get("seasons"),
  getVehicles: () => host.get("crud/vehicles"),
  getUsers: () => host.get("crud/users"),
  postLogin: (body: loginBody) => host.post("admin/login", body),
  postRegister: (body: registerBody) => host.post("admin/register", body),
};

export default api;
