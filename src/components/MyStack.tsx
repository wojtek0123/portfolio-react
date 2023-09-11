import SectionWrapper from './SectionWrapper';
import image from '../assets/undraw_code_review.svg';
import Technologies from './Technologies';

const MyStack = () => {
	const stackNode = (
		<>
			<Technologies />
			<img
				src={image}
				alt='The boy is walking towards and large browser window'
				className='mt-10 hidden sm:block'
			/>
		</>
	);

	return (
		<div className='xl:hidden top-0 z-10'>
			<SectionWrapper
				sectionId='stack'
				title='My stack'
				childBelowTitle={stackNode}
			></SectionWrapper>
		</div>
	);
};

export default MyStack;
