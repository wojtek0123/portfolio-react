import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import DesktopNavigation from './components/DesktopNavigation';
import Experience from './components/Experience';
import Header from './components/Header';
import MobileNavigation from './components/MobileNavigation';
import MyStack from './components/MyStack';
import Projects from './components/Projects';

const App = () => (
	<div className='snap-both snap-mandatory h-screen overflow-y-scroll bg-black text-white overflow-x-hidden xl:overflow-y-scroll xl:overflow-x-hidden xl:scrollbar-none scroll-smooth relative selection:text-black selection:bg-white'>
		<MobileNavigation />
		<DesktopNavigation />
		<Experience />
		<Header />
		<AboutMe />
		<MyStack />
		<Projects />
		<Contact />
	</div>
);

export default App;
