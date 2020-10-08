import React from 'react';
import Teacher from '../../models/Teacher';
import { ScrollView } from 'react-native';
import TeacherItemComponent from './TeacherItem';

interface Props {
	data: Teacher[];
	favorites: any[];
};

const TeacherListComponent: React.FC<Props> = ({ data, favorites }) => {

	function renderItens() {
		return data.map( element => (
			<TeacherItemComponent 
				key={String(element.id)}
				item={element}
				favorited={favorites.includes(element.id)}
			/>
		))
	};

	return(
		<ScrollView
			style={{ marginTop: -40 }}
			contentContainerStyle={{
				paddingHorizontal: 16,
				paddingBottom: 16
			}}
		>
			{ renderItens() }
		</ScrollView>
	);
};

export default TeacherListComponent;