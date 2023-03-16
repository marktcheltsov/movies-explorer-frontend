import './AboutMe.css';
import Mylogo from '../../img/about/myAvatar.png'

function AboutMe() {
    return (
        <section className="about-me" id="aboutme">
            <h2 className="about-me__title">Студент</h2>
            <div className="about-me__content-conatainer">
                <div className="about-me__text-container">            
                    <h3 className="about-me__name">Виталий</h3>
                    <p className="about-me__my-info">Фронтенд-разработчик, 30 лет</p>
                    <p className="about-me__my-description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                    </p>
                    <a href="https://github.com/marktcheltsov" target="_blank" className="about-me__link">Github</a>
                </div>
                <img src={Mylogo} alt="me" className="about-me__avatar"/>
            </div>
        </section>
    );
}

export default AboutMe;