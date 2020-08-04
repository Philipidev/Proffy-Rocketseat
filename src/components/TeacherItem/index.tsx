import React from 'react';

import whatsappicon from '../../assests/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
        <header>
            <img src="https://avatars2.githubusercontent.com/u/63356103?s=460&u=fb0f507e5058cb7d40118ea9e3cfee68ae4090a8&v=4" alt="Philipi"/>
            <div>
                <strong>
                    Philipi Carvalho
                </strong>
                <span>
                    Linguagem de Programação
                </span>
            </div>
        </header>
        <p>
            olhar simga
            <br/><br/>
            olhasr sigma
        </p>
        <footer>
            <p>
                preço/hora
                <strong>
                    R$80,00
                </strong>
            </p>
            <button type="button">
                <img src={whatsappicon} alt="WhatsApp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    );
}

export default TeacherItem;