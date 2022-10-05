import backgroundImage from './assets/undraw_startup_life.svg';

const App = () => (
	<div className='bg-black h-screen w-screen text-white relative overflow-hidden'>
		<header className='flex flex-col justify-around items-start absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 w-full'>
			<div className='mb-10 px-5'>
				<span className='text-5xl font-bold'>Hello!</span>
				<h1 className='text-4xl font-bold mt-5'>I am a Junior Frontend Developer</h1>
			</div>
			<div className='flex items-center justify-between text-center w-full px-5 mb-5'>
				<div className=''>slide left</div>
				<div className=''>slide right</div>
			</div>
			<img src={backgroundImage} alt='' />
		</header>
		<nav className='flex justify-between px-5 items-center fixed bottom-5 left-0 right-0 text-center'>
			<span className='text-xl uppercase'>about me</span>
			<span className='text-xl uppercase'>home</span>
			<span className='text-xl uppercase'>work</span>
			<span className='text-xl uppercase'>contact</span>
		</nav>
	</div>
);

export default App;
