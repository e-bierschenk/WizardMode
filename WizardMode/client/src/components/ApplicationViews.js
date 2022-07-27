import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { Dashboard } from "./dashboard/Dashboard";
import { Game } from "./game/Game";
import { ScoreDetail } from "./score/ScoreDetail";

export default function ApplicationViews({ isLoggedIn }) {
    return (
        <main>
            <Routes>
                <Route path="/">
                    <Route index element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
                    <Route path="/scores">
                        <Route path=":id" element={isLoggedIn ? <ScoreDetail /> : <Navigate to="/login" />} />
                        <Route path="game/:id" element={isLoggedIn ? <Game /> : <Navigate to="/login" />} />
                    </Route>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="*" element={<p>Whoops, nothing here...</p>} />
                </Route>
            </Routes>
        </main >
    );
};
