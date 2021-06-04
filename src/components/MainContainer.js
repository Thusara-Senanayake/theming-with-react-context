import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import Footer from './Footer';
import SecondaryContainer from './SecondaryContainer';

function MainContainer(props) {
	const { theme } = useContext(ThemeContext);

	return (
		<div
			className={
				'container-fluid border rounded mx-auto col-sm-11 my-2 border-' + theme
			}
		>
			<SecondaryContainer />
			<Footer />
		</div>
	);
}

export default MainContainer;
