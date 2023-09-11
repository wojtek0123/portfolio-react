import SectionWrapper from './SectionWrapper';
import background from '../assets/undraw_envelope.svg';
import SocialLinks from './SocialLinks';
import Footer from './Footer';

const Contact: React.FC = () => {
	const contactNode = (
		<>
			<form
				action='https://formsubmit.co/c94e1eed968e8af34282467c031a69b1'
				method='POST'
				className='flex flex-col gap-5 w-full min-[2300px]:w-1/2 text-black mb-10 selection:text-white selection:bg-black'
			>
				<input
					className='w-full xl:max-w-2xl p-2 rounded text-xl'
					type='email'
					placeholder='your email'
					pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
					name='email'
					id='email'
					required
				/>
				<input
					className='w-full xl:max-w-2xl p-2 rounded text-xl'
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
				<SocialLinks smallSize={false} />
			</form>
		</>
	);

	return (
		<SectionWrapper sectionId='contact' title='Contact' childBelowTitle={contactNode}>
			<>
				<img
					src={background}
					alt='The boy next to huge white envelope'
					className='hidden xl:block'
				/>
				<Footer />
			</>
		</SectionWrapper>
	);
};

export default Contact;
