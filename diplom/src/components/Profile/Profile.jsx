import './Profile.css'

function Profile(){
    return(
        <section class="profile">
            <h2 class="profile__title">Привет, Виталий!</h2>
            <div class="profile__description">
                <div class="profile__description-content-container">
                    <p class="profile__description-about">Имя</p>
                    <p class="profile__description-title">Виталий</p>
                </div>
                <div class="profile__description-content-container">
                    <p class="profile__description-about">E-mail</p>
                    <p class="profile__description-title">pochta@yandex.ru</p>
                </div>
            </div>
            <button class="profile__setings-btn profile__edit-btn">Редактировать</button>
            <button class="profile__setings-btn profile__exit-btn">Выйти из аккаунта</button>
        </section>
    )
}

export default Profile;