import backgroundImage from '../assets/undraw_startup_life.svg';
import reactIcon from '../assets/react-brands.svg';
import graphqlIcon from '../assets/graphql-logo-2.svg';
import typescriptIcon from '../assets/typescript-brand.svg';
import sassIcon from '../assets/sass-brand.svg';
import githubIcon from '../assets/github.svg';
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
			className='xl:sticky top-0 z-10 flex justify-center items-center bg-black w-screen min-h-screen overflow-x-hidden'
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
					</div>
				</div>
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
