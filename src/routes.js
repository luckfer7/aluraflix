import Header from "components/Header";
import Rodape from "components/Rodape";
import Inicio from "pages/Inicio";
import NovoVideo from "pages/NovoVideo";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes () {
    return (
        <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<Inicio />}></Route>
                    <Route path="/NovoVideo" element={<NovoVideo />}></Route>
                </Routes>
            <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes;