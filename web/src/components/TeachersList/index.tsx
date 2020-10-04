import React from 'react';
import Teacher from '../../models/Teacher';
import TeachersListItem from './Item';
import './styles.css'

interface Props {
    data: Teacher[];
};

const TeachersListComponent: React.FC<Props> = (props) => {
    const { data } = props;

    function renderTeachersItens() {
        return data.map( item => (
            <TeachersListItem 
                key={item.id}
                data={item} 
            />
        ))
    };

    return(
        <ul style={{ listStyle: "none"}}>
            { renderTeachersItens() }
        </ul>
    );
};

export default TeachersListComponent;