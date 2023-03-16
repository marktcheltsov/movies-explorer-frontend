import './Promo.css'

function Promo() {
    return (
        <section className="description">
            <h1 className="description__title">Учебный проект студента факультета Веб-разработки.</h1>
            <div className="description__btns-container">
                <a href="#project" className="description__link"><button className="description__btn">О проекте</button></a>
                <a href="#technologies" className="description__link"><button className="description__btn">Технологии</button></a>
                <a href="#aboutme" className="description__link"><button className="description__btn">Студент</button></a>
            </div>
        </section>
    )
}

export default Promo;