import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

console.log("main.jsx loaded"); // <-- додано лог

try {
	ReactDOM.createRoot(document.getElementById("root")).render(
		<React.StrictMode>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</React.StrictMode>
	);
	console.log("React render attempted"); // <-- додано лог
} catch (err) {
	console.error("Render error:", err);
}
