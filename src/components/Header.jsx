import { Link } from "react-router-dom";

function Header() {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link to="/">Головна</Link>
					</li>
					<li>
						<Link to="/about">Про мене</Link>
					</li>
					<li>
						<Link to="/projects">Мої роботи</Link>
					</li>
					<li>
						<Link to="/contact">Контакти</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
