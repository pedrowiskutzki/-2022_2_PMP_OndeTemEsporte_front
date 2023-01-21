import { Route, Routes } from "react-router-dom";
import Map from "../Pages/Map/index";
import Home from "../Pages/Home/index";
import Calendar from "../Pages/Calendar/index"
import LoginAdm from "../Pages/LoginAdm/index"
import InsertEvento from "../Pages/FormAdm/InsertEvento";
import InsertCentroEsportivo from "../Pages/FormAdm/InsertCentroEsportivo";
import InsertUsuario from "../Pages/FormAdm/InsertUsuario";
import InsertAtividade from "../Pages/FormAdm/InsertAtividade";
import UpdateEvento from "../Pages/FormAdm/UpdateEvento";
import UpdateCentroEsportivo from "../Pages/FormAdm/UpdateCentroEsportivo";
import UpdateUsuario from "../Pages/FormAdm/UpdatePessoa";
import  HomeAdm  from "../Pages/HomeAdm";
import AuthContext from "../Context/auth";
import { useContext } from "react";
import UpdateAtividade from "../Pages/FormAdm/UpdateAtividade";

export function Router() {
    const { isAuthenticated } = useContext(AuthContext);

    //Nao athenticado
    if (!isAuthenticated) {
        return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/map" element={<Map />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/loginAdm" element={<LoginAdm />} />  
                <Route path="*" element={<h1>Erro 404 - Página não Encontrada</h1>} />
            </Routes>
        );
    }
    //athenticacao
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<Map />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/loginAdm" element={<LoginAdm />} />
            <Route path="/insertCentro" element={<InsertCentroEsportivo/>}/>
            <Route path="/insertEvento" element={<InsertEvento/>}/>
            <Route path="/insertUsuario" element={<InsertUsuario/>}/>
            <Route path="/atualizarEvento/:id" element={<UpdateEvento/>}/>
            <Route path="/atualizarCentro/:id" element={<UpdateCentroEsportivo/>}/>
            <Route path="/atualizarPessoa/:id" element={<UpdateUsuario/>}/>
            <Route path="/atualizarAtividade/:id" element={<UpdateAtividade/>}/>
            <Route path="/insertAtividade" element={<InsertAtividade/>}/>
            <Route path="/homeadm" element={<HomeAdm />} />
            <Route path="*" element={<h1>Erro 404 - Página não Encontrada</h1>} />
        </Routes>
    );
}
