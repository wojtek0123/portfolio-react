import MobileNavigation from '../components/MobileNavigation';
import DesktopNavigation from '../components/DesktopNavigation';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import MyStack from '../components/MyStack';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Experience from '../components/Experience';

export default function HomePage() {
	return (
		<div className='snap-both snap-mandatory h-screen overflow-y-scroll bg-black text-white overflow-x-hidden xl:overflow-y-scroll xl:overflow-x-hidden xl:scrollbar-none scroll-smooth relative selection:text-black selection:bg-white'>
			<MobileNavigation />
			<DesktopNavigation />
			<Header />
			<AboutMe />
			<Experience />
			<MyStack />
			<Projects />
			<Contact />
		</div>
	);
}
