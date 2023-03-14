import './Portfolio.css'

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__menu">
                <li className="porfolio__menu-item">
                    <div className="portfolio__menu-item-container">
                        <p className="portfolio__menu-item-name">Статичный сайт</p>
                        <span className="portfolio__menu-item-icon">↗</span>
                    </div>
                </li>
                <li className="porfolio__menu-item">
                    <div className="portfolio__menu-item-container">
                        <p className="portfolio__menu-item-name">Адаптивный сайт</p>
                        <span className="portfolio__menu-item-icon">↗</span>
                    </div>
                </li>
                <li className="porfolio__menu-item">
                    <div className="portfolio__menu-item-container">
                        <p className="portfolio__menu-item-name">Одностраничное приложение</p>
                        <span className="portfolio__menu-item-icon">↗</span>
                    </div>
                </li>
            </ul>
        </section> 
    );
}

export default Portfolio;