import backgroundImage from '../assets/undraw_startup_life.svg';
import reactIcon from '../assets/react-brands.svg';
import graphqlIcon from '../assets/graphql-logo-2.svg';
import typescriptIcon from '../assets/typescript-brand.svg';
import sassIcon from '../assets/sass-brand.svg';
import githubIcon from '../assets/github.svg';
import angularIcon from '../assets/angular.svg';
import rxjsIcon from '../assets/rxjs_logo.svg';
import linkedInIcon from '../assets/linkedin-blue.svg';
import vueIcon from '../assets/vuejs-icon.svg';
import {navLinksHandler} from '../utils/utils';

const Header = () => (
	<header
		className='relative flex min-h-screen w-screen snap-start items-center justify-center overflow-x-hidden xl:snap-center'
		id='header'
	>
		<div className='grid w-full max-w-[80vw] xl:grid-cols-2'>
			<div className='mb-10 flex flex-col items-start justify-start gap-y-8 px-5 md:mb-16 md:gap-y-14 xl:gap-y-24'>
				<div>
					<span className='text-5xl font-bold md:text-8xl xl:text-9xl'>Hello!</span>
					<h2 className='mt-5 text-4xl font-bold xl:text-6xl'>
						I&apos;m a Junior Front-end Developer
					</h2>
				</div>
				<div className='flex w-full items-center justify-start gap-x-2 sm:gap-x-5 xl:gap-10'>
					<button
						type='button'
						className='rounded bg-white px-5 py-3 text-xl text-black transition-colors hover:bg-slate-300 sm:px-10'
						onClick={() => {
							navLinksHandler('contact');
						}}
					>
						Contact
					</button>
					<a
						href='https://github.com/wojtek0123'
						target='_blank'
						rel='noopener noreferrer'
						type='button'
						className='rounded bg-white px-5 py-3 text-xl text-black transition-colors hover:bg-slate-300 sm:px-10'
					>
						Github
					</a>
				</div>
			</div>
			<img
				src={backgroundImage}
				alt='The boy who stand next to a laptop which reach to the belt of that boy'
				className='w-[35rem] xl:w-full'
			/>
		</div>
		<div className='absolute bottom-10 left-1/2 hidden animate-wiggle items-center justify-center xl:flex'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				fill='currentColor'
				className='bi bi-arrow-left mr-2 mt-1'
				viewBox='0 0 16 16'
			>
				<path
					fillRule='evenodd'
					d='M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z'
				/>
			</svg>
			<span className=''>scroll down</span>
		</div>
		<div className='absolute left-[20vw] top-[80vh] hidden animate-[spin_infinite_5s_forwards_linear] xl:block'>
			<img src={reactIcon} alt='' className='h-10 w-10' />
		</div>
		<div className='absolute left-[75vw] top-[25vh] hidden animate-[spin_infinite_8s_forwards_linear] lg:block'>
			<img src={graphqlIcon} alt='' className='h-10 w-10' />
		</div>
		<div className='absolute left-[5vw] top-[15vh] hidden animate-[spin_infinite_3s_forwards_reverse_linear] lg:block'>
			<img src={typescriptIcon} alt='' className='h-10 w-10' />
		</div>
		<div className='absolute left-[50vw] top-[65vh] hidden animate-[spin_infinite_6s_forwards_reverse_linear] xl:block'>
			<img src={sassIcon} alt='' className='h-10 w-10' />
		</div>
		<div className='absolute left-[80vw] top-[85vh] hidden animate-[spin_infinite_3s_forwards_reverse_linear] xl:block'>
			<img src={githubIcon} alt='' className='h-10 w-10' />
		</div>
		<div className='absolute left-[40vw] top-[10vh] hidden animate-[spin_infinite_10s_forwards_linear] lg:block'>
			<img src={rxjsIcon} alt='' className='h-12 w-12' />
		</div>
		<div className='absolute left-[45vw] top-[53vh] hidden animate-[spin_infinite_10s_forwards_reverse_linear] lg:block'>
			<img src={angularIcon} alt='' className='h-12 w-12' />
		</div>
		<div className='absolute left-[90vw] top-[10vh] hidden animate-[spin_infinite_7s_forwards_reverse_linear] lg:block'>
			<img src={linkedInIcon} alt='' className='h-8 w-8' />
		</div>
		<div className='absolute left-[60vw] top-[90vh] hidden animate-[spin_infinite_15s_forwards_reverse_linear] lg:block'>
			<img src={vueIcon} alt='' className='h-10 w-10' />
		</div>
	</header>
);

export default Header;
