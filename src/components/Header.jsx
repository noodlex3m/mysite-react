import React from "react";

function Header() {
	return (
		<header className="site-header" aria-label="Головна навігація">
			<div className="container header-inner">
				<h1 className="logo">Сергій Тріщук</h1>
				<nav>
					<ul className="nav-list">
						<li>
							<a href="/">Головна</a>
						</li>
						<li>
							<a href="#about">Про мене</a>
						</li>
						<li>
							<a href="#projects">Мої роботи</a>
						</li>
						<li>
							<a href="#contact">Контакти</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
export default Header;
