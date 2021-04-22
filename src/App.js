import React, {useState, useEffect} from 'react';
import './assets/css/globals.css';
import Header from './components/header.js'
import TopCardList from './components/top-card-list.js'
import Overview from './components/overview.js'
import Switch from './components/switch.js';


function App() {
	const [darkMode, setDarkMode] = useState(false)
	const [checked, setCheckend] = useState(false)
	const mainClass =  darkMode ? 'is-dark-mode' :'is-light-mode'

	function changeMedia(mq)
	{
		setDarkMode(mq.matches)
		setCheckend(mq.matches)

	}

	useEffect(()=> {
		const mq = window.matchMedia('(prefers-color-scheme: dark)')
		mq.addListener(changeMedia)
		setDarkMode(mq.matches)
		setCheckend(mq.matches)
	}, [])

	return (
	<main className={mainClass}>
	  <Header>
	  	<Switch 
	  		setDarkMode={setDarkMode} 
	  		checked={checked} 
	  		setCheckend={setCheckend}
	  	/>
	  </Header>
	  <TopCardList/>
	  <Overview/>
	</main>
	)
}

export default App;
