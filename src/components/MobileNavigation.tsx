import {useState} from 'react';
import {navLinksHandler} from '../utils/utils';

const MobileNavigation = () => {
	const [openMenu, setOpenMenu] = useState(false);

	const hamburgerHandler = () => {
		setOpenMenu((prevState) => !prevState);
	};

	return (
		<>
			<nav className='fixed right-5 top-5 z-20 flex h-10 w-12 items-center justify-center bg-transparent xl:hidden'>
				<button
					type='button'
					title='Menu'
					className='relative h-10 w-12 rounded bg-transparent p-1'
					onClick={hamburgerHandler}
				>
					<span
						className={`absolute block h-[0.2rem] w-10 rounded bg-white transition-transform duration-500 ease-in-out ${
							openMenu ? 'translate-y-0 rotate-45' : '-translate-y-3 rotate-0'
						}`}
					></span>
					<span
						className={`absolute block h-[0.2rem] w-10 rounded bg-current transition-opacity duration-500 ease-in-out ${
							openMenu ? 'opacity-0' : 'opacity-100'
						}`}
					></span>
					<span
						className={`absolute block h-[0.2rem] w-10 rounded bg-white transition-transform duration-500 ease-in-out ${
							openMenu ? 'translate-y-0 -rotate-45' : 'translate-y-3 rotate-0'
						}`}
					></span>
				</button>
			</nav>
			<nav
				className={`fixed bottom-0 left-0 z-20 flex h-max w-full flex-col items-center justify-center rounded-t-2xl border-t-2 border-yellow-500 bg-black px-5 py-5 text-white transition-transform duration-500 ease-in-out sm:left-1/2 sm:max-w-md sm:-translate-x-1/2 sm:border-l-2 sm:border-r-2 xl:hidden ${
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
								navLinksHandler('experience');
								hamburgerHandler();
							}}
						>
							Experience
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
