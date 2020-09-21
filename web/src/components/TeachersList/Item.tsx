import React from 'react';

import wppIcon from '../../assets/icons/whatsapp.svg';

interface Props {
    data: {};
}

const TeachersListItem: React.FC<Props> = (props) => {
    return(
        <li>
            <article className="teacher-content">
                <header>
                    <img src="https://avatars0.githubusercontent.com/u/45368194?s=460&u=dad3bdb4e21c553141f8ce319c40f8fab8dfbdf0&v=4" alt="Yan Weschenfelder"/>
                    <div>
                        <strong>Yan Weschenfelder</strong>
                        <span>Subject</span>
                    </div>
                </header>
                <p>
                    Uma textp bem grande aqui para ter coisas das porra aqui tudo ne ssa merda
                    <br/>
                    aaaaaa
                    aaaaaaaa
                </p>
                <footer>
                    <p>
                        Hour/price
                        <strong>$10,00</strong>
                    </p>
                    <button type="button">
                        <img src={wppIcon} alt="Whatsapp"/>
                        Come in call
                    </button>
                </footer>
            </article>
        </li>
    );
};

export default TeachersListItem;