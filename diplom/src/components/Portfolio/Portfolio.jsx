import './Portfolio.css'

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__menu">
                <li className="porfolio__menu-item">
                    <div className="portfolio__menu-item-container">
                        <a href='https://cheltsovsmesto.nomoredomains.club/' target="_blank" className='portfolio__menu-item-link'><p className="portfolio__menu-item-name">Статичный сайт</p></a>
                        <a href='https://cheltsovsmesto.nomoredomains.club/' target="_blank" className='portfolio__menu-item-link'><span className="portfolio__menu-item-icon">↗</span></a>
                    </div>
                </li>
                <li className="porfolio__menu-item">
                    <div className="portfolio__menu-item-container">
                        <a href='https://cheltsovsmesto.nomoredomains.club/' target="_blank" className='portfolio__menu-item-link'><p className="portfolio__menu-item-name">Адаптивный сайт</p></a>
                        <a href='https://cheltsovsmesto.nomoredomains.club/' target="_blank" className='portfolio__menu-item-link'><span className="portfolio__menu-item-icon">↗</span></a>
                    </div>
                </li>
                <li className="porfolio__menu-item">
                    <div className="portfolio__menu-item-container">
                        <a href='https://cheltsovsmesto.nomoredomains.club/' target="_blank" className='portfolio__menu-item-link'><p className="portfolio__menu-item-name">Одностраничное приложение</p></a>
                        <a href='https://cheltsovsmesto.nomoredomains.club/' target="_blank" className='portfolio__menu-item-link'><span className="portfolio__menu-item-icon">↗</span></a>
                    </div>
                </li>
            </ul>
        </section> 
    );
}

export default Portfolio;