import React from "react";
import profile from "../assets/profile.jpg";

function HomePage() {
	return (
		<main className="main-content">
			<section className="hero">
				<div className="container hero-inner">
					<div className="hero-text">
						<h2>Привіт, я Сергій</h2>
						<p>
							Фронтент-ентузіаст. Вчу React, Vite та modern JavaScript. Тут мої
							роботи та контактні дані.
						</p>
					</div>

					<div className="hero-image" aria-hidden="true">
						<img src={profile} alt="Фото Сергія" />
						<div className="avatar-placeholder">Фото</div>
					</div>
				</div>
			</section>

			<section id="about" className="about container">
				<h3>Про мене</h3>
				<p>
					Моє ім'я Сергій, я вивчаю веб-розробку (HTML, CSS, JavaScript, React).
					Мене надихає створення інтерактивних і корисних сайтів, які
					допомагають людям. Моя мета — стати фронтенд-розробником і працювати
					над цікавими проєктами.
				</p>
			</section>

			<section id="projects" className="projects container">
				<h3>Мої роботи</h3>
				<div className="project-list">
					<article className="project-card">
						<h4>Сайт-портфоліо</h4>
						<p>
							Мій особистий сайт. Створений для демонстрації навичок та
							інформації про мене.
						</p>
						<p>
							<strong>Технології:</strong>
							<span className="technologies">HTML, CSS, JavaScript</span>
						</p>
						<p>
							Статус: <span className="status completed">Завершено</span>
						</p>
						<a className="btn" href="https://my.serh.one/">
							Демо
						</a>
					</article>
					<article className="project-card">
						<h4>Застосунок для погоди</h4>
						<p>
							Простий односторінковий застосунок, що показує поточну погоду в
							обраному місті, використовуючи публічний API.
						</p>
						<p>
							<strong>Технології:</strong>
							<span className="technologies">
								HTML, CSS, JavaScript, Fetch API
							</span>
						</p>
						<p>
							Статус: <span className="status completed">Завершено</span>
						</p>
						<a className="btn" href="https://serh.one/">
							Демо
						</a>
					</article>
					<article className="project-card">
						<h4>Калькуляток ФОП</h4>
						<p>
							Калькуляток ФОП на загальній та спрощеній ФОП 1, 2 та 3 група без
							ПДВ системі оподаткування.
						</p>
						<p>
							<strong>Технології:</strong>
							<span className="technologies">HTML, CSS, JavaScript...</span>
						</p>
						<p>
							Статус: <span className="status in-progress">В розробці</span>
						</p>
						<a
							className="btn"
							href="https://github.com/noodlex3m/tax-calculator"
						>
							GitHub репо
						</a>
					</article>
				</div>
			</section>

			<section id="contact" className="contact container">
				<h3>Контакти</h3>
				<p>Email: noodlex3m@gmail.com - Telegram: https://t.me/frontendon</p>
			</section>
		</main>
	);
}
export default HomePage;
