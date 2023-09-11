import spinner from '../assets/spinner-solid.svg';

const LoadingSpinner = () => (
	<div className='flex min-h-screen w-full items-center justify-center bg-black'>
		<img src={spinner} alt='Loading spinner' className='w-20 animate-spin' />
	</div>
);

export default LoadingSpinner;
