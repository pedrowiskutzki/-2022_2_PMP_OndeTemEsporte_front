import { api } from "../api/api";

const getAll = () => {
    return api.get("evento");
};

const get = (id) => {
    return api.get(`evento/${id}`);
};

const create = (data) => {
    return api.post("evento", data);
};

const update = (id, data) => {
    return api.put(`evento/${id}`, data);
};

const remove = (id) => {
    return api.delete(`evento/${id}`);
};
const eventoService = {
    getAll,
    get,
    create,
    update,
    remove,
};
export default eventoService;
