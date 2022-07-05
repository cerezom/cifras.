import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { SecretariaTic } from "./ContentDrawerPage/ContentSecretariaTic/SecretariaTic";

import ContentDrawerPage from "./ContentDrawerPage/DrawerPage";
import { BoardPowerBI } from "./TableroPage/BoardPowerBI";

export const Routing: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={ <ContentDrawerPage /> }>
                <Route path="*" element={<Navigate replace to="/" />} />
                <Route path={"/tablero/*"} element={ <BoardPowerBI/>} />
                <Route path={"/secretaria_tic/*"} element={<SecretariaTic/>}/>
            </Route>
        </Routes>
    );
};