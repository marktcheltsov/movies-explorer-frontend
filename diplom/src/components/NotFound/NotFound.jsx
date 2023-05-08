
import { Link } from 'react-router-dom';
import './NotFound.css'

function NotFound() {
    return (
        <section className="undefind">
            <div className="undefind__container">
                <h2 className="undefind__title">404</h2>
                <p className="undefind__sub-title">Страница не найдена</p>
                <Link className="undefind__link" to="/"><p className="undefind__link-text">Назад</p></Link>
            </div>
        </section>
    )
}

export default NotFound;