import React from "react";

function Footer() {
	return (
		<footer className="site-footer">
			<div className="container">
				<p>© {new Date().getFullYear()} Сергій Тріщук. Усі права захищені.</p>
			</div>
		</footer>
	);
}
export default Footer;
