import backgroundImage from '../assets/undraw_startup_life.svg';
import reactIcon from '../assets/react-brands.svg';
import graphqlIcon from '../assets/graphql-logo-2.svg';
import typescriptIcon from '../assets/typescript-brand.svg';
import sassIcon from '../assets/sass-brand.svg';
import githubIcon from '../assets/github.svg';
import ChangeSectionBtn from './ChangeSectionBtn';
import angularIcon from '../assets/angular.svg';
import linkedInIcon from '../assets/linkedin-blue.svg';
import vueIcon from '../assets/vuejs-icon.svg';
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';
import PropTypes from 'prop-types';

const Header: React.FC<{onVisible: (value: boolean) => void}> = ({onVisible}) => {
	const {ref, inView} = useInView({
		threshold: 0.5,
	});

	useEffect(() => {
		onVisible(inView);
	}, [inView]);

	return (
		<header
			className='relative flex justify-center items-center w-screen snap-start xl:snap-center min-h-screen overflow-x-hidden'
			id='header'
			ref={ref}
		>
			<div className='grid xl:grid-cols-2'>
				<div className='flex flex-col items-start justify-start gap-y-8 md:gap-y-14 xl:gap-y-24 mb-10 px-5 md:mb-16'>
					<div>
						<span className='text-5xl md:text-8xl xl:text-9xl font-bold'>Hello!</span>
						<h2 className='text-4xl font-bold mt-5 xl:text-6xl'>
							I&apos;m a Junior Frontend Developer
						</h2>
					</div>
					<div className='flex w-full gap-x-2 sm:justify-start sm:gap-x-5 justify-evenly xl:gap-10 items-center'>
						<button
							type='button'
							className='bg-white border border-white text-black px-5 sm:px-10 py-3 text-xl rounded hover:bg-slate-300 transition-colors'
							onClick={() => document.getElementById('contact')?.scrollIntoView()}
						>
							Contact
						</button>
						<button
							type='button'
							className='border border-white text-white px-5 sm:px-10 py-3 text-xl rounded bg-black hover:bg-zinc-900'
							onClick={() => document.getElementById('about-me')?.scrollIntoView()}
						>
							Next section
						</button>
						<div className='relative group hidden xl:block'>
							<svg
								className='w-14 h-14 fill-yellow-500 hover:fill-white transition-colors hidden xl:block'
								viewBox='0 0 512 512'
							>
								<path d='M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM256 336c-18 0-32 14-32 32s13.1 32 32 32c17.1 0 32-14 32-32S273.1 336 256 336zM289.1 128h-51.1C199 128 168 159 168 198c0 13 11 24 24 24s24-11 24-24C216 186 225.1 176 237.1 176h51.1C301.1 176 312 186 312 198c0 8-4 14.1-11 18.1L244 251C236 256 232 264 232 272V288c0 13 11 24 24 24S280 301 280 288V286l45.1-28c21-13 34-36 34-60C360 159 329 128 289.1 128z' />
							</svg>
							<div className='absolute hidden w-max bottom-0 translate-x-full translate-y-8 -right-3 bg-white shadow-lg text-black px-5 py-5 rounded z-10 text-xl group-hover:block'>
								<p>This page is horizontal. To scroll</p>
								<p className='font-bold'>press &apos;shift&apos; and use scroll in the mouse</p>
								<p>or use touchpad in the laptop to scroll horizontally</p>
							</div>
						</div>
					</div>
				</div>
				<ChangeSectionBtn isRight={true} sectionId='about-me' sectionName='about me' />
				<img src={backgroundImage} alt='' className='' />
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
			<div className='hidden xl:block absolute top-[65vh] left-[50vw] animate-[spin_infinite_6s_forwards_reverse_linear]'>
				<img src={sassIcon} alt='' className='w-10 h-10' />
			</div>
			<div className='hidden xl:block absolute top-[85vh] left-[80vw] animate-[spin_infinite_3s_forwards_reverse_linear]'>
				<img src={githubIcon} alt='' className='w-10 h-10' />
			</div>
			<div className='hidden lg:block absolute top-[10vh] left-[40vw] animate-[spin_infinite_10s_forwards_linear]'>
				<img src={angularIcon} alt='' className='w-12 h-12' />
			</div>
			<div className='hidden lg:block absolute top-[53vh] left-[45vw] animate-[spin_infinite_10s_forwards_reverse_linear]'>
				<img src={angularIcon} alt='' className='w-12 h-12' />
			</div>
			<div className='hidden lg:block absolute top-[10vh] left-[90vw] animate-[spin_infinite_7s_forwards_reverse_linear]'>
				<img src={linkedInIcon} alt='' className='w-8 h-8' />
			</div>
			<div className='hidden lg:block absolute top-[90vh] left-[60vw] animate-[spin_infinite_15s_forwards_reverse_linear]'>
				<img src={vueIcon} alt='' className='w-10 h-10' />
			</div>
		</header>
	);
};

Header.propTypes = {
	onVisible: PropTypes.func.isRequired,
};

export default Header;
