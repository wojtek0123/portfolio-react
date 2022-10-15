import {useEffect, useRef, useState} from 'react';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Header from './components/Header';
import MyStack from './components/MyStack';
import Projects from './components/Projects';
import SocialLinks from './components/SocialLinks';
import {navLinksHandler} from './utils/utils';

const App = () => {
	const [showAllSection, setShowAllSection] = useState(false);
	const [isProjectsSectionVisible, setIsProjectsSectionVisible] = useState(false);
	const [isHandlerVisible, setIsHandlerVisible] = useState(false);
	const [isAboutMeSectionVisible, setIsAboutMeSectionVisible] = useState(false);
	const [isContactSectionVisible, setIsContactSectionVisible] = useState(false);
	const [openMenu, setOpenMenu] = useState(false);

	const visibleHandler = (value: boolean, fn: (value: boolean) => void) => {
		fn(value);
	};

	const hamburgerHandler = () => {
		setOpenMenu((prevState) => !prevState);
	};

	useEffect(() => {
		setTimeout(() => {
			setShowAllSection(true);
		}, 10);
	}, []);

	return (
		<div className='snap-both snap-mandatory h-screen overflow-y-scroll bg-black text-white overflow-x-hidden xl:overflow-x-scroll xl:overflow-y-hidden xl:scrollbar-none scroll-smooth relative selection:text-black selection:bg-white'>
			<div className='flex flex-col xl:flex-row w-max'>
				<Header
					onVisible={(value) => {
						visibleHandler(value, setIsHandlerVisible);
					}}
				/>
				{showAllSection && (
					<>
						<AboutMe
							onVisible={(value) => {
								visibleHandler(value, setIsAboutMeSectionVisible);
							}}
						/>
						<MyStack />
						<Projects
							onVisible={(value) => {
								visibleHandler(value, setIsProjectsSectionVisible);
							}}
						/>
						<Contact
							onVisible={(value) => {
								visibleHandler(value, setIsContactSectionVisible);
							}}
						/>
					</>
				)}
			</div>
			<nav className='fixed top-5 right-5 w-12 h-10 bg-transparet xl:hidden flex items-center justify-center'>
				<button
					type='button'
					title='Menu'
					className='relative bg-transparent rounded w-12 h-10 p-1'
					onClick={hamburgerHandler}
				>
					<span
						className={`block absolute h-[0.2rem] w-10 rounded bg-white transition-transform duration-500 ease-in-out ${
							openMenu ? 'translate-y-0 rotate-45' : '-translate-y-3 rotate-0'
						}`}
					></span>
					<span
						className={`block absolute h-[0.2rem] w-10 rounded bg-current transition-opacity duration-500 ease-in-out ${
							openMenu ? 'opacity-0' : 'opacity-100'
						}`}
					></span>
					<span
						className={`block absolute h-[0.2rem] w-10 rounded bg-white transition-transform duration-500 ease-in-out ${
							openMenu ? 'translate-y-0 -rotate-45' : 'translate-y-3 rotate-0'
						}`}
					></span>
				</button>
			</nav>
			<nav
				className={`fixed bottom-0 left-0 w-full h-max flex flex-col items-center justify-center bg-black py-5 px-5 rounded-t-2xl border-t-2 sm:border-r-2 sm:border-l-2 border-yellow-500 sm:left-1/2 sm:-translate-x-1/2 transition-transform duration-500 ease-in-out sm:max-w-md xl:hidden ${
					openMenu ? 'translate-y-0' : 'translate-y-full'
				}`}
			>
				<ul className='flex flex-col items-center gap-y-3'>
					<li>
						<button
							type='button'
							className='text-2xl'
							onClick={() => {
								navLinksHandler('header');
								hamburgerHandler();
							}}
						>
							Home
						</button>
					</li>
					<li>
						<button
							type='button'
							className='text-2xl'
							onClick={() => {
								navLinksHandler('about-me');
								hamburgerHandler();
							}}
						>
							About me
						</button>
					</li>
					<li>
						<button
							type='button'
							className='text-2xl'
							onClick={() => {
								navLinksHandler('stack');
								hamburgerHandler();
							}}
						>
							Stack
						</button>
					</li>
					<li>
						<button
							type='button'
							className='text-2xl'
							onClick={() => {
								navLinksHandler('projects');
								hamburgerHandler();
							}}
						>
							Projects
						</button>
					</li>
					<li>
						<button
							type='button'
							className='text-2xl'
							onClick={() => {
								navLinksHandler('contact');
								hamburgerHandler();
							}}
						>
							Contact
						</button>
					</li>
				</ul>
			</nav>
			<div className='fixed top-0 left-0 right-0 justify-between items-center pt-5 hidden xl:flex px-10'>
				<h1>Wojciech Pietraszuk</h1>
				<nav className='flex gap-5'>
					<button
						className={`relative font-thin text-3xl py-1 px-2 tracking-wider hover:text-yellow-500 transition-colors duration-300 after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-0 after:transition-[width] after:duration-300 after:h-[0.075rem] after:bg-yellow-500 uppercase ${
							isHandlerVisible ? 'text-yellow-500 after:w-full' : ''
						}`}
						type='button'
						onClick={() => {
							navLinksHandler('header');
						}}
					>
						home
					</button>
					<button
						className={`relative font-thin text-3xl py-1 px-2 tracking-wider hover:text-yellow-500 transition-colors duration-300 after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-0 after:transition-[width] after:duration-300 after:h-[0.075rem] after:bg-yellow-500 uppercase ${
							isAboutMeSectionVisible ? 'text-yellow-500 after:w-full' : ''
						}`}
						type='button'
						onClick={() => {
							navLinksHandler('about-me');
						}}
					>
						about me
					</button>
					<button
						className={`relative font-thin text-3xl py-1 px-2 tracking-wider hover:text-yellow-500 transition-colors duration-300 after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-0 after:transition-[width] after:duration-300 after:h-[0.075rem] after:bg-yellow-500 uppercase ${
							isProjectsSectionVisible ? 'text-yellow-500 after:w-full' : ''
						}`}
						type='button'
						onClick={() => {
							navLinksHandler('projects');
						}}
					>
						projects
					</button>
					<button
						className={`relative font-thin text-3xl py-1 px-2 tracking-wider hover:text-yellow-500 transition-colors duration-300 after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-0 after:transition-[width] after:duration-300 after:h-[0.075rem] after:bg-yellow-500 uppercase ${
							isContactSectionVisible ? 'text-yellow-500 after:w-full' : ''
						}`}
						type='button'
						onClick={() => {
							navLinksHandler('contact');
						}}
					>
						contact
					</button>
				</nav>
				<SocialLinks smallSize={true} />
			</div>
		</div>
	);
};

export default App;
