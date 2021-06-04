import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function Footer(props) {
	const { theme } = useContext(ThemeContext);
	return (
		<div
			className={
				'footer text-' +
				theme +
				' text-center py-5 border-' +
				theme +
				' border-top-dashed'
			}
		>
			<p>Copyright © 2021 Theming With React-Context</p>
		</div>
	);
}
export default Footer;
