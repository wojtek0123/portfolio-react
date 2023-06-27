import spinner from '../assets/spinner-solid.svg';

const LoadingSpinner = () => (
	<div className='min-h-screen w-full bg-black flex items-center justify-center'>
		<img src={spinner} alt='Loading spinner' className='animate-spin w-20' />
	</div>
);

export default LoadingSpinner;
