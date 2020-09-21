import React from 'react';
import TeachersListItem from './Item';
import './styles.css'

interface Props {
    data: {}[];
};

const TeachersListComponent: React.FC<Props> = (props) => {
    const { data } = props;

    function renderTeachersItens() {
        return data.map( item => (
            <TeachersListItem data={item} />
        ))
    };

    return(
        <ul style={{ listStyle: "none"}}>
            { renderTeachersItens() }
        </ul>
    );
};

export default TeachersListComponent;