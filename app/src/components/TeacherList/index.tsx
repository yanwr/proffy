import React from 'react';
import Teacher from '../../models/Teacher';
import { ScrollView } from 'react-native';
import TeacherItemComponent from './TeacherItem';

interface Props {
	data: Teacher[];
};

const TeacherListComponent: React.FC<Props> = ({ data }) => {

	function renderItens() {
		return data.map( element => (
			<TeacherItemComponent key={String(element.id)} item={element} />
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