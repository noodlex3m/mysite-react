import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";

export default function App() {
	console.log("App rendered");
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</Layout>
	);
}
