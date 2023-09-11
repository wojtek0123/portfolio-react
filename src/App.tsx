import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import DesktopNavigation from './components/DesktopNavigation';
import Experience from './components/Experience';
import Header from './components/Header';
import MobileNavigation from './components/MobileNavigation';
import MyStack from './components/MyStack';
import Projects from './components/Projects';

const App = () => (
	<div className='relative h-screen snap-both snap-mandatory overflow-x-hidden overflow-y-scroll scroll-smooth bg-black text-white selection:bg-white selection:text-black xl:overflow-x-hidden xl:overflow-y-scroll xl:scrollbar-none'>
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
