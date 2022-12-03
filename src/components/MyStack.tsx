import SectionTitle from './SectionTitle';
import SectionWrapper from './SectionWrapper';
import image from '../assets/undraw_code_review.svg';
import Technologies from './Technologies';

const MyStack = () => (
	<div className='xl:hidden top-0 z-10'>
		<SectionWrapper sectionId='stack'>
			<>
				<SectionTitle>My stack</SectionTitle>
				<Technologies />
				<img src={image} alt='' className='mt-10 hidden sm:block' />
			</>
		</SectionWrapper>
	</div>
);

export default MyStack;
