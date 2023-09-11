import {navLinksHandler} from '../utils/utils';

const AsideNavigation = () => (
	<nav className='fixed left-2 top-1/2 -translate-y-1/2 z-20'>
		<ul className='list-none flex flex-col gap-2'>
			<li>
				<button
					className='text-xl'
					onClick={() => {
						navLinksHandler('header');
					}}
				>
					Home
				</button>
			</li>
			<li>
				<button
					className='text-xl'
					onClick={() => {
						navLinksHandler('about-me');
					}}
				>
					About me
				</button>
			</li>
			<li>
				<button
					className='text-xl'
					onClick={() => {
						navLinksHandler('projects');
					}}
				>
					Projects
				</button>
			</li>
			<li>
				<button
					className='text-xl'
					onClick={() => {
						navLinksHandler('contact');
					}}
				>
					Contact
				</button>
			</li>
		</ul>
	</nav>
);

export default AsideNavigation;
