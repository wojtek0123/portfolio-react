import SectionTitle from './SectionTitle';
import SectionWrapper from './SectionWrapper';
import background from '../assets/undraw_envelope.svg';
import ChangeSectionBtn from './ChangeSectionBtn';
import SocialLinks from './SocialLinks';
import Footer from './Footer';
import {useEffect} from 'react';
import {useInView} from 'react-intersection-observer';
import PropTypes from 'prop-types';

const Contact: React.FC<{onVisible: (value: boolean) => void}> = ({onVisible}) => {
	const {ref, inView} = useInView({
		threshold: 0.5,
	});

	useEffect(() => {
		onVisible(inView);
	}, [inView]);

	return (
		<SectionWrapper sectionId='contact'>
			<>
				<div className='xl:pr-10' ref={ref}>
					<SectionTitle>Contact</SectionTitle>
					<form
						action='https://formsubmit.co/c94e1eed968e8af34282467c031a69b1'
						method='POST'
						className='grid gap-5 text-black mb-10 selection:text-white selection:bg-black'
					>
						<input
							className='w-full xl:max-w-lg p-2 rounded text-xl'
							type='email'
							placeholder='your email'
							pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
							name='email'
							id='email'
							required
						/>
						<input
							className='w-full xl:max-w-lg p-2 rounded text-xl'
							type='text'
							name='subject'
							placeholder='subject'
							required
						/>
						<textarea
							className='p-2 rounded text-xl w-full xl:max-w-2xl h-40 xl:h-80 max-h-80'
							placeholder='message'
							name='message'
							id='message'
							required
						></textarea>
						<button
							className='bg-white w-full xl:max-w-xs py-3 text-xl rounded text-black hover:bg-slate-300 transition-colors'
							type='submit'
						>
							Submit
						</button>
					</form>
					<SocialLinks smallSize={false} />
				</div>
				<img src={background} alt='' className='hidden xl:block' />
				<Footer />
			</>
		</SectionWrapper>
	);
};

Contact.propTypes = {
	onVisible: PropTypes.func.isRequired,
};

export default Contact;
