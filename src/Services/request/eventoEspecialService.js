import { api } from "../api/api";

const getAll = () => {
    return api.get(`eventoEspecial`);
};

const get = (id) => {
    return api.get(`eventoEspecial/${id}`);
};

const getImagem = async (imagem) => {
    var url = `eventoEspecial/mostrarImagem/${imagem}`;
    console.log(url);
    return await api.get(url, { responseType: 'arraybuffer' });
}

const create = (data) => {
    return api.post(`eventoEspecial`, data);
};

const update = (id, data) => {
    return api.put(`eventoEspecial/${id}`, data);
};

const remove = (id) => {
    return api.delete(`eventoEspecial/${id}`);
};
const eventoEspecialService = {
    getAll,
    get,
    create,
    update,
    remove,
    getImagem,
};
export default eventoEspecialService;
