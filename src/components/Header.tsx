import backgroundImage from '../assets/undraw_startup_life.svg';

const Header = () => (
	<header className='flex flex-col justify-center items-start w-screen snap-center h-screen overflow-x-hidden'>
		<div className='mb-10 px-5'>
			<span className='text-5xl font-bold'>Hello!</span>
			<h1 className='text-4xl font-bold mt-5'>I am a Junior Frontend Developer</h1>
		</div>
		<img src={backgroundImage} alt='' />
	</header>
);

export default Header;
