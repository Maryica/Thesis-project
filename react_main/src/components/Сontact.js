import React from 'react';
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../style.scss";
import backgroundContact from "../img/backgroundContact.jpg";


function Contact() {
    return (
        <div className="box-content">
            <Header />
            <content className="content">
                <section>
                    <div className="contact_box center b-img" style={{
                        background: `url(${backgroundContact})`,
                        backgroundPosition: 'bottom right',
                        backgroundSize: '45%',
                        backgroundRepeat: 'no-repeat'
                    }}
                    >
                        <div className="contact-left box-text">
                            <h4 className="contact-text f-title box-text">Менеджер:</h4>
                            <a className="contact-text_link box-text" href="tel:+79118357578"
                            >+7 (911) 835-75-78</a
                            >
                            <div className="contact-wr_link box-text">


                            </div>
                            <p className="fr-text1 box-text">пн.- сб.: 09:00 - 19:00</p>
                            <h4 className="contact-text f-title f-mail box-text">E-mail:</h4>

                            <a className="contact-text_link box-text" href="mailto:a-veles-khan-czfo@mail.ru"
                            >a-veles-khan-czfo@mail.ru</a
                            >
                            <p className="contact-text box-text">
                                (Можно отправлять заявки на этот адрес электронной почты.)
                            </p>
                        </div>
                        <div classNameclass="contact-center box-text" style={{ border: '3px solid #d6b02b', borderRadius: '10% 10%' }}>
                            <h4 className="contact-text f-title box-text">Адрес:</h4>
                            <p className="contact-text box-text">
                                Ленинградская область, пос. Янино-1, ул. Заводская, уч. 17
                            </p>
                            <h4 className="contact-text f-title box-text">Наименование и адрес производителя:</h4>
                            <p className="contact-text box-text">
                                ООО «ЭФДК-ВЕЛЕС» * 346527, Ростовская обл., г. Шахты, ул. Ворошилова,
                                2д, литер Ч/Н.
                            </p>
                        </div>
                        <div className="contact-right box-text">
                            <h3 className="contact-text f-title box-text">Условия хранения:</h3>
                            <p className="contact-text box-text">
                                хранить в сухих, чистых, проветриваемых помещениях при температуре от
                                4 до 35`С при относительной влажности воздуха не более 75%. Дата
                                изготовления указана на сварном шве.
                            </p>
                            <p className="contact-text box-text">Срок годности 18 месяцев с даты изготовления</p>
                            <p className="fr-text2 box-text">ИП Чеботарь Д.М.</p>
                        </div></div>
                </section></content >
            <Footer />
        </div >
    );
}

export default Contact;
