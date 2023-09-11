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
				className='mb-10 flex w-full flex-col gap-5 text-black selection:bg-black selection:text-white min-[2300px]:w-1/2'
			>
				<input
					className='w-full rounded p-2 text-xl xl:max-w-2xl'
					type='email'
					placeholder='your email'
					pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
					name='email'
					id='email'
					required
				/>
				<input
					className='w-full rounded p-2 text-xl xl:max-w-2xl'
					type='text'
					name='subject'
					placeholder='subject'
					required
				/>
				<textarea
					className='h-40 max-h-80 w-full rounded p-2 text-xl xl:h-80 xl:max-w-2xl'
					placeholder='message'
					name='message'
					id='message'
					required
				></textarea>
				<button
					className='w-full rounded bg-white py-3 text-xl text-black transition-colors hover:bg-slate-300 xl:max-w-xs'
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
