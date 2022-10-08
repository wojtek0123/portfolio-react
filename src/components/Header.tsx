import backgroundImage from '../assets/undraw_startup_life.svg';
import reactIcon from '../assets/react-brands.svg';
import graphqlIcon from '../assets/graphql-logo-2.svg';
import typescriptIcon from '../assets/typescript-brand.svg';
import sassIcon from '../assets/sass-brand.svg';
import githubIcon from '../assets/github.svg';
import arrowRight from '../assets/arrow-right.svg';

const Header = () => (
	<header
		className='relative flex flex-col justify-center items-center w-screen snap-center h-screen overflow-x-hidden'
		id='header'
	>
		<div className='flex flex-col justify-center items-start xl:grid xl:grid-cols-2'>
			<div className='flex flex-col items-start justify-start gap-y-24 h-full mb-10 px-5 md:mb-16'>
				<div>
					<span className='text-5xl md:text-7xl xl:text-9xl font-bold'>Hello!</span>
					<h2 className='text-4xl font-bold mt-5 xl:text-6xl'>
						I&apos;m a Junior Frontend Developer
					</h2>
				</div>
				<div className='flex gap-10'>
					<button type='button' className='bg-white text-black px-10 py-3 text-xl rounded'>
						Contact
					</button>
					<a
						href='#about-me'
						className='hidden xl:block border border-white text-white px-10 py-3 text-xl rounded'
					>
						Next section
					</a>
				</div>
			</div>
			<div className='absolute text-2xl top-1/2 -translate-y-1/2 bg-white right-0 translate-x-1/3 border-white px-5 rounded animate-pulse rotate-90'>
				<a href='#about-me' className='flex items-center justify-center rounded px-3 py-3'>
					<p className='font-extralight text-black'>go to about me</p>
					<img src={arrowRight} alt='' className='-rotate-90 w-6 h-6 ml-3' />
				</a>
			</div>
			<img src={backgroundImage} alt='' />
		</div>
		<div className='hidden xl:block absolute top-[80vh] left-[20vw] animate-[spin_infinite_5s_forwards_linear]'>
			<img src={reactIcon} alt='' className='w-10 h-10' />
		</div>
		<div className='hidden lg:block absolute top-[25vh] left-[75vw] animate-[spin_infinite_8s_forwards_linear]'>
			<img src={graphqlIcon} alt='' className='w-10 h-10' />
		</div>
		<div className='hidden lg:block absolute top-[15vh] left-[5vw] animate-[spin_infinite_3s_forwards_reverse_linear]'>
			<img src={typescriptIcon} alt='' className='w-10 h-10' />
		</div>
		<div className='hidden xl:block absolute top-[65vh] left-[50vw] animate-[spin_infinite_3s_forwards_reverse_linear]'>
			<img src={sassIcon} alt='' className='w-10 h-10' />
		</div>
		<div className='hidden xl:block absolute top-[85vh] left-[80vw] animate-[spin_infinite_3s_forwards_reverse_linear]'>
			<img src={githubIcon} alt='' className='w-10 h-10' />
		</div>
		<div className='hidden lg:block absolute top-[10vh] left-[40vw] animate-[spin_infinite_10s_forwards_linear]'>
			<svg className='w-10 h-10 fill-[#e23237]' viewBox='0 0 448 512'>
				<path d='M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z' />
			</svg>
		</div>
	</header>
);

export default Header;
