import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function ListGroupLeft(props) {
	// ! contains hard-coded data
	const { theme } = useContext(ThemeContext);
	return (
		<div className="col-7 list-group">
			<a
				href=" "
				className={
					'list-group-item list-group-item-action active list-group-item-' +
					theme +
					' bg-' +
					theme
				}
			>
				<div className="d-flex w-100 justify-content-between">
					<h5 className="mb-1">JavaScript behavior</h5>
					<small>3 days ago</small>
				</div>
				<p className="mb-1">
					You can activate a list group navigation without writing any
					JavaScript.
				</p>
				<small>And some small print.</small>
			</a>
			<a href=" " className="list-group-item list-group-item-action">
				<div className="d-flex w-100 justify-content-between">
					<h5 className="mb-1">Using data attributes</h5>
					<small className="text-muted">7 days ago</small>
				</div>
				<p className="mb-1">Enable table list item via JavaScript.</p>
				<small className="text-muted">And some muted small print.</small>
			</a>
			<a href="   " className="list-group-item list-group-item-action">
				<div className="d-flex w-100 justify-content-between">
					<h5 className="mb-1">Fade effect</h5>
					<small className="text-muted">8 days ago</small>
				</div>
				<p className="mb-1">
					To make tabs panel fade in, add .fade to each .tab-pane.{' '}
				</p>
				<small className="text-muted">And some muted small print.</small>
			</a>
		</div>
	);
}
export default ListGroupLeft;
