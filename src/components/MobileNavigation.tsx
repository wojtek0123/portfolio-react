import {useState} from 'react';
import {navLinksHandler} from '../utils/utils';

const MobileNavigation = () => {
	const [openMenu, setOpenMenu] = useState(false);

	const hamburgerHandler = () => {
		setOpenMenu((prevState) => !prevState);
	};

	return (
		<>
			<nav className='fixed top-5 right-5 w-12 h-10 bg-transparent xl:hidden flex items-center justify-center z-20'>
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
				className={`fixed bottom-0 left-0 w-full h-max flex flex-col items-center justify-center bg-black py-5 px-5 rounded-t-2xl border-t-2 sm:border-r-2 sm:border-l-2 border-yellow-500 sm:left-1/2 sm:-translate-x-1/2 transition-transform duration-500 ease-in-out sm:max-w-md xl:hidden text-white z-20 ${
					openMenu ? 'translate-y-0' : 'translate-y-full'
				}`}
			>
				<ul className='flex flex-col items-center gap-y-3'>
					<li>
						<button
							type='button'
							className='text-2xl sm:text-3xl'
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
							className='text-2xl sm:text-3xl'
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
							className='text-2xl sm:text-3xl'
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
							className='text-2xl sm:text-3xl'
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
							className='text-2xl sm:text-3xl'
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
		</>
	);
};

export default MobileNavigation;
