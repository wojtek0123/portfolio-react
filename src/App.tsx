import {useEffect, useState} from 'react';
import backgroundImage from './assets/undraw_startup_life.svg';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

const App = () => {
	const [slide, setSlide] = useState(1);

	const onNext = () => {
		setSlide((prevState) => {
			if (slide >= 2) {
				return 2;
			}

			prevState += 1;
			return prevState;
		});
	};

	const onPrev = () => {
		setSlide((prevState) => {
			if (slide === 0) {
				return 0;
			}

			prevState -= 1;
			return prevState;
		});
	};

	useEffect(() => {
		console.log(slide);
	}, [slide]);

	return (
		<div className='snap-x snap-proximity flex flex-col justify-between bg-black h-screen w-screen text-white overflow-y-hidden overflow-x-scroll'>
			<div
				className={`h-full flex w-max transition-transform duration-1000 ${
					slide === 0 ? 'translate-x-0' : `-translate-x-[${slide * 100}vw]`
				}`}
			>
				<AboutMe />
				<header className='flex flex-col justify-center h-full items-start w-screen snap-center'>
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
				<Projects />
			</div>
			<nav className='fixed flex justify-between px-5 items-center bg-black bottom-0 left-0 right-0 text-center pb-5'>
				<button
					className='text-xl bg-white text-black py-1 px-3 rounded-lg'
					type='button'
					onClick={onPrev}
				>
					prev
				</button>
				<span className='text-xl uppercase'>home</span>
				<button
					className='text-xl bg-white text-black py-1 px-3 rounded-lg'
					type='button'
					onClick={onNext}
				>
					next
				</button>
			</nav>
		</div>
	);
};

export default App;
