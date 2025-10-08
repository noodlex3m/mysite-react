import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

function App() {
	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/projects" element={<ProjectsPage />} />
					<Route path="/contact" element={<ContactPage />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

// Ось цей рядок все виправить!
export default App;
