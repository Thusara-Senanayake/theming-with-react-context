import ListGroupMain from './ListGroupMain';
import Paragraph from './Paragraph';

function SecondaryContainer(props) {
	// ! hard-coded data
	const paragraphs = [
		{
			id: 1,
			title: 'Conveying meaning to assistive technologies',
			content: [
				`Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers.Ensure that information denoted by the color is either obvious from the content itself(e.g.the visible text), or is included through alternative means, such as additional text hidden with the.sr - only class.`,

				`Selects the given list item and shows its associated pane. Any other list item that was previously selected becomes unselected and its associated pane is hidden Returns to the caller before the tab pane has actually been shown (for example, before the shown.bs.tab event occurs).`,
			],
		},
		{
			id: 2,
			title: 'JavaScript behavior',
			content: [
				`Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers.Ensure that information denoted by the color is either obvious from the content itself(e.g.the visible text), or is included through alternative means, such as additional text hidden with the.sr - only class.`,
			],
		},
	];
	return (
		<>
			<Paragraph paragraph={paragraphs[0]} />
			<ListGroupMain />
			<Paragraph paragraph={paragraphs[1]} />
		</>
	);
}
export default SecondaryContainer;
