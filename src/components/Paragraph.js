import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function Paragraph(props) {
	const { theme } = useContext(ThemeContext);
	return (
		<div
			className={
				'row border-sm-0 border-left border-' +
				theme +
				' pl-3 mx-3 my-4 border-3'
			}
		>
			<h4 className="mb-4">{props.paragraph.title}</h4>
			{props.paragraph.content.map((p) => (
				<p key={props.paragraph.content.indexOf(p)} className="pb-2">
					{p}
				</p>
			))}
		</div>
	);
}
export default Paragraph;
