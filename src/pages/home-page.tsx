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
		<div className='relative h-screen snap-both snap-mandatory overflow-x-hidden overflow-y-scroll scroll-smooth bg-black text-white selection:bg-white selection:text-black xl:overflow-x-hidden xl:overflow-y-scroll xl:scrollbar-none'>
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
