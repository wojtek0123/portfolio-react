import backgroundImage from './assets/undraw_startup_life.svg';

const App = () => (
	<div className='flex flex-col justify-between bg-black h-screen w-screen text-white relative overflow-x-hidden'>
		<header className='flex flex-col justify-center h-full items-start w-full'>
			<div className='mb-10 px-5'>
				<span className='text-5xl font-bold'>Hello!</span>
				<h1 className='text-4xl font-bold mt-5'>I am a Junior Frontend Developer</h1>
			</div>
			<div className='flex items-center justify-between text-center w-full px-5 mb-10'>
				<div className='animate-[slide-left_1s_infinite_alternate]'>slide left</div>
				<div className='animate-[slide-right_1s_infinite_alternate]'>slide right</div>
			</div>
			<img src={backgroundImage} alt='' />
		</header>
		<nav className='flex justify-between px-5 items-center bg-black bottom-0 left-0 right-0 text-center pb-5'>
			<button className='text-xl bg-white text-black py-1 px-3 rounded-lg' type='button'>
				prev
			</button>
			<span className='text-xl uppercase'>home</span>
			<button className='text-xl bg-white text-black py-1 px-3 rounded-lg' type='button'>
				next
			</button>
		</nav>
	</div>
);

export default App;
