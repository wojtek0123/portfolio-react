import backgroundImage from '../assets/undraw_startup_life.svg';

const Header = () => (
	<header
		className='flex flex-col justify-center items-center w-screen snap-center h-screen overflow-x-hidden'
		id='header'
	>
		<div className='flex flex-col justify-center items-start'>
			<div className='mb-10 px-5'>
				<span className='text-5xl font-bold'>Hello!</span>
				<h2 className='text-4xl font-bold mt-5'>I am a Junior Frontend Developer</h2>
			</div>
			<img src={backgroundImage} alt='' />
		</div>
	</header>
);

export default Header;
