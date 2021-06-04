import React, { useState } from 'react';

const ThemeContext = React.createContext();

export { ThemeContext };

function ThemeContextProvider(props) {
	const [theme, setTheme] = useState('primary');
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{props.children}
		</ThemeContext.Provider>
	);
}
export { ThemeContextProvider };
