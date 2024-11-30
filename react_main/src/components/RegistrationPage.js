import Header from "./Header";
import { HandySvg } from "handy-svg";
import right_arrow_icon from "../img/right_arrow.svg";
import Footer from "./Footer";

function RegistrationPage() {
    return (
        <div className="box-content">
            <Header />
            <content className="content">
                <div className="head center">
                    <h1 className="head_title">Регистрация</h1>
                </div>
                <div className="reg-box center">
                    <div className="reg-box__left">
                        <form action="#" method="post" id="reg_user">
                            <div className="reg-box__reg-form">
                                <p className="reg-box__form_title">Ваше имя</p>
                                <input
                                    className="reg-box__reg-field"
                                    type="text"
                                    id="user_first_name"
                                    placeholder="Имя"
                                    required
                                />
                                <input
                                    className="reg-box__reg-field"
                                    type="text"
                                    id="user_last_name"
                                    placeholder="Фамилия"
                                    required
                                />
                            </div>

                            <div className="reg-box__reg-form">
                                <p className="reg-box__form_title">Вход в личный кабинет</p>
                                <input
                                    className="reg-box__reg-field"
                                    type="email"
                                    id="user_email"
                                    placeholder="Email"
                                    required
                                />
                                <input
                                    className="reg-box__reg-field"
                                    type="password"
                                    id="user_password"
                                    placeholder="Password"
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                    required
                                />
                            </div>
                            <p className="reg-box__password-requirements">Пароль должен состоять из букв и цифр, длина 8 или более символов</p>
                        </form>
                        <div>
                            <button className="reg-box__button" type="submit" form="reg_user">
                                Войти
                                <HandySvg src={right_arrow_icon} width="17" height="10" />
                            </button>
                        </div>
                    </div>
                    <div className="reg-box__right">
                        <p className="reg-box__perks_title">Преимущества программы поощрения клиентов</p>
                        <p className="reg-box__perks_text">Участие в программе лояльности даёт возможность получать скидки и бонусы на товары и услуги, что делает покупки выгоднее.</p>
                        <ul className="reg-box__perks_lst">
                            <li className="reg-box__perks_li">Скидка 15% на первый заказ</li>
                            <li className="reg-box__perks_li">Индивидуальные акции и скидки</li>
                            <li className="reg-box__perks_li">Скидка 10% на день рождения</li>

                        </ul>
                    </div>
                </div>
            </content>
            <Footer />
        </div>
    );
}

export default RegistrationPage;
