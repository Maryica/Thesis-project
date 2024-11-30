import React from 'react';
import { Link } from "react-router-dom";



function Footer() {
    return (
        <footer className="footer">
            <section>
                <div className="contacts center">
                    <p className="copyright_text">© 2024 А-ВЕЛЕС-ХАН</p>
                    <a className="contact-text_link" href="tel:+79118357578"
                    >+7 (911) 835-75-78 </a>
                    <div className="social_nets_bar">
                        <p class="footer-text">
                            Ленинградская область, пос. Янино-1, ул. Заводская, уч. 17
                        </p>


                    </div>
                </div>
            </section>
        </footer>
    );
}



export default Footer;