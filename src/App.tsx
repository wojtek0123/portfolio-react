import {useEffect, useState} from 'react';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Header from './components/Header';
import MyStack from './components/MyStack';
import Projects from './components/Projects';
import SocialLinks from './components/SocialLinks';

const App = () => {
	const [showAllSection, setShowAllSection] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setShowAllSection(true);
		}, 0);
	}, []);

	return (
		<div className='snap-both snap-mandatory h-screen overflow-y-scroll bg-black text-white overflow-x-hidden xl:overflow-x-scroll xl:overflow-y-hidden xl:scrollbar-none scroll-smooth relative selection:text-black selection:bg-white'>
			<div className='flex flex-col xl:flex-row w-max'>
				<Header />
				{showAllSection && (
					<>
						<AboutMe />
						<MyStack />
						<Projects />
						<Contact />
					</>
				)}
			</div>
			<div className='fixed top-0 left-0 right-0 justify-between items-center pt-5 hidden xl:flex px-10'>
				<h1>Wojciech Pietraszuk</h1>
				<nav className='flex gap-5'>
					<a
						className='relative font-thin text-3xl py-1 px-2 tracking-wider hover:text-yellow-500 transition-colors duration-300 after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:transition-[width] after:duration-300 after:h-[0.075rem] after:bg-yellow-500 uppercase'
						href='#header'
					>
						home
					</a>
					<a
						className='relative font-thin text-3xl py-1 px-2 tracking-wider hover:text-yellow-500 transition-colors duration-300 after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:transition-[width] after:duration-300 after:h-[0.075rem] after:bg-yellow-500 uppercase'
						href='#about-me'
					>
						about me
					</a>
					<a
						className='relative font-thin text-3xl py-1 px-2 tracking-wider hover:text-yellow-500 transition-colors duration-300 after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:transition-[width] after:duration-300 after:h-[0.075rem] after:bg-yellow-500 uppercase'
						href='#projects'
					>
						projects
					</a>
					<a
						className='relative font-thin text-3xl py-1 px-2 tracking-wider hover:text-yellow-500 transition-colors duration-300 after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:transition-[width] after:duration-300 after:h-[0.075rem] after:bg-yellow-500 uppercase'
						href='#contact'
					>
						contact
					</a>
				</nav>
				<SocialLinks smallSize={true} />
			</div>
		</div>
	);
};

export default App;
