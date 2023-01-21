import { api } from "../api/api";


const getAll = () => {
    return api.get("pessoa");
};

const get = (id) => {
    return api.get(`pessoa/${id}`);
};

const create = (data) => {
    return api.post("pessoa", data);
};

const createLogin = (data) => {
    return api.post("pessoa/login", data);
};

const update = (id, data) => {
    return api.put(`pessoa/${id}`, data);
};

const remove = (id) => {
    return api.delete(`pessoa/${id}`);
};
const pessoaService = {
    getAll,
    get,
    create,
    update,
    remove,
    createLogin
};
export default pessoaService;
