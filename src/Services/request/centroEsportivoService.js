import { api } from "../api/api";

const getAll = (size) => {
    return api.get(`centroEsportivo?size=${size}`);
};

const getAllPageable = (size, page)  => {
    return api.get(`centroEsportivo?size=${size}&page=${page}`);
};

const get = (id) => {
    return api.get(`centroEsportivo/${id}`);
};

const getImagem = async (imagem) => {
    var url = `centroEsportivo/mostrarImagem/${imagem}`;
    console.log(url);
    return await api.get(url, { responseType: 'arraybuffer' });
}

const create = (data) => {
    return api.post("centroEsportivo", data);
};

const update = (id, data) => {
    return api.put(`centroEsportivo/${id}`, data);
};

const remove = (id) => {
    return api.delete(`centroEsportivo/${id}`);
};
const centroEsportivoService = {
    getAll,
    get,
    create,
    update,
    remove,
    getImagem,
    getAllPageable
};
export default centroEsportivoService;

