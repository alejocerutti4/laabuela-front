import axios from "axios";

const defaultUrl = "https://laabuela-api.vercel.app/api/v1/";
const envUrl = process.env.REACT_APP_API_URL;
const url = envUrl ? (envUrl.endsWith("/") ? envUrl : `${envUrl}/`) : defaultUrl;

const getAllProductos = async () => {
    const token = localStorage.getItem("token");
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    };
    const response = await axios.get(url + "productos", { headers });
    return response.data;
}

const updateProducto = async (producto, id) => {
    const token = localStorage.getItem("token");
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    };
    const response = await axios.put(url + "productos/" + id, producto, { headers });
    return response;
}

const guardarNuevoProducto = async (producto) => {
    const token = localStorage.getItem("token");
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    };
    const response = await axios.post(url + "productos/", producto, { headers });
    return response;
}

const deleteProducto = async (id) => {
    const token = localStorage.getItem("token");
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    };
    const response = await axios.delete(url + "productos/" + id, { headers });
    return response;
}

const logIn = async (email, password) => {
    try{
        const response = await axios.post(url + "login", { email, password });
        return response;
    }catch(e){
        return e.response;
    }
}
export { getAllProductos, updateProducto, guardarNuevoProducto, deleteProducto, logIn };

