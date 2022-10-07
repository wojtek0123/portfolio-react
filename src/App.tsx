import {useEffect} from 'react';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';

const App = () => {
	console.log('OK');

	return (
		<div className='snap-both snap-mandatory h-screen overflow-y-scroll bg-black text-white overflow-x-hidden xl:overflow-x-scroll xl:overflow-y-hidden xl:scrollbar-none scroll-smooth relative'>
			<div className='flex flex-col xl:flex-row w-max'>
				<Header />
				<AboutMe />
				<Projects />
				<Footer />
			</div>
			<div className='fixed bottom-0 left-0 right-0 justify-between pb-5 hidden xl:flex px-10'>
				<h1>Wojciech Pietraszuk</h1>
				<nav>
					<a className='font-thin text-2xl py-1 px-2 mr-3' href='#header'>
						home
					</a>
					<a className='font-thin text-2xl py-1 px-2 mx-3' href='#about-me'>
						about me
					</a>
					<a className='font-thin text-2xl py-1 px-2 ml-3' href='#projects'>
						projects
					</a>
				</nav>
				<div>socials</div>
			</div>
		</div>
	);
};

export default App;
