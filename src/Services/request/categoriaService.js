import { api } from "../api/api";

const getAll = () => {
    return api.get("categoria");
};

const get = (id) => {
    return api.get(`categoria/${id}`);
};

const create = (data) => {
    return api.post("categoria", data);
};

const update = (id, data) => {
    return api.put(`categoria/${id}`, data);
};

const remove = (id) => {
    return api.delete(`categoria/${id}`);
};
const categoriaService = {
    getAll,
    get,
    create,
    update,
    remove,
};
export default categoriaService;

