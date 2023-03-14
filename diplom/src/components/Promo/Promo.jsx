import './Promo.css'

function Promo() {
    return (
        <section className="description">
            <h1 className="description__title">Учебный проект студента факультета Веб-разработки.</h1>
            <div className="description__btns-container">
                <button className="description__btn">О проекте</button>
                <button className="description__btn">Технологии</button>
                <button className="description__btn">Студент</button>
            </div>
        </section>
    )
}

export default Promo;