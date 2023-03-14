import './AboutProject.css'

function AboutProject() {
    return (
        <section className="project">
            <h2 className="project__title">О проекте</h2>
            <div className="project__description-columns">
                <div className="project__description-column">
                    <p className="project__description-title">Дипломный проект включал 5 этапов</p>
                    <p className="project__description-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="project__description-column">
                    <p className="project__description-title">На выполнение диплома ушло 5 недель</p>
                    <p className="project__description-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="project__plan">
                <div className="project__plan-backend">
                    <div className="project__plan-img-backend"><span className="project__plan-img-backend-text">1 неделя</span></div>
                    <p className="project__plan-text">Back-end</p>
                </div>
                <div className="project__plan-frontend">
                    <div className="project__plan-img-frontend"><span className="project__plan-img-frontend-text">4 недели</span></div>
                    <p className="project__plan-text">Front-end</p>
                </div>
            </div>
        </section>
    )
}

export default AboutProject;