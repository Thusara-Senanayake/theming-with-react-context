import './App.css';
import MainContainer from './components/MainContainer';
import ThemeBar from './components/ThemeBar';
import { ThemeContextProvider } from './contexts/ThemeContext';

function App() {
	return (
		<div className="App">
			<ThemeContextProvider>
				<ThemeBar />
				<MainContainer />
			</ThemeContextProvider>
		</div>
	);
}

export default App;
