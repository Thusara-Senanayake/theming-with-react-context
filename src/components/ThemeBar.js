import { useContext } from 'react';
import { Col } from 'react-bootstrap';
import { ThemeContext } from '../contexts/ThemeContext';
function ThemeBar(props) {
	const { setTheme } = useContext(ThemeContext);
	return (
		<Col align="right">
			<ul className=" list-inline">
				<li className="list-inline-item mx-1">
					<h1
						className="text-primary"
						role="button"
						onClick={() => {
							setTheme('primary');
						}}
					>
						●
					</h1>
				</li>
				<li className="list-inline-item mx-1">
					<h1
						className="text-success"
						role="button"
						onClick={() => {
							setTheme('success');
						}}
					>
						●
					</h1>
				</li>
				<li className="list-inline-item mx-1">
					<h1
						className="text-danger"
						role="button"
						onClick={() => {
							setTheme('danger');
						}}
					>
						●
					</h1>
				</li>
				<li className="list-inline-item mx-1">
					<h1
						className="text-info"
						role="button"
						onClick={() => {
							setTheme('info');
						}}
					>
						●
					</h1>
				</li>
			</ul>
		</Col>
	);
}
export default ThemeBar;
