import {useState} from 'react';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import DesktopNavigation from './components/DesktopNavigation';
import Header from './components/Header';
import MobileNavigation from './components/MobileNavigation';
import MyStack from './components/MyStack';
import Projects from './components/Projects';

const App = () => (
	<div className='relative text-white'>
		<MobileNavigation />
		<DesktopNavigation />
		<Header />
		<AboutMe />
		<MyStack />
		<Projects />
		<Contact />
	</div>
);

export default App;
