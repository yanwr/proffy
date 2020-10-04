import React from 'react';
import { createConnection } from '../../services/ConnectionService';
import Teacher from '../../models/Teacher';

import wppIcon from '../../assets/icons/whatsapp.svg';

interface Props {
    data: Teacher;
}

const TeachersListItem: React.FC<Props> = ({ data }) => {
    return(
        <li>
            <article className="teacher-content">
                <header>
                    <img src={data.avatar} alt={data.name}/>
                    <div>
                        <strong>{data.name}</strong>
                        <span>{data.subject}</span>
                    </div>
                </header>
                <p>
                    {data.bio}
                </p>
                <footer>
                    <p>
                        Hour/price
                        <strong>${data.price}</strong>
                    </p>
                    <a 
                        onClick={() => createConnection(data.user_id)}
                        href={`https://wa.me/${data.phone}`}
                    >
                        <img src={wppIcon} alt="Whatsapp"/>
                        Come in call
                    </a>
                </footer>
            </article>
        </li>
    );
};

export default TeachersListItem;