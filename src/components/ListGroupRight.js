import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function ListGroupRight(props) {
	// ! contains hard-coded data
	const { theme } = useContext(ThemeContext);
	return (
		<div className="col-4">
			<ul className="list-group">
				<li className="list-group-item d-flex justify-content-between align-items-center">
					className A
					<span className={'badge badge-' + theme + ' badge-pill'}>5</span>
				</li>
				<li className="list-group-item d-flex justify-content-between align-items-center">
					className B
					<span className={'badge badge-' + theme + ' badge-pill'}>4</span>
				</li>
			</ul>
		</div>
	);
}
export default ListGroupRight;
