import SectionTitle from './SectionTitle';
import SectionWrapper from './SectionWrapper';
import background from '../assets/undraw_envelope.svg';
import ChangeSectionBtn from './ChangeSectionBtn';
import SocialLinks from './SocialLinks';
import Footer from './Footer';

const Contact = () => (
	<SectionWrapper sectionId='contact'>
		<>
			<div className='xl:pr-10'>
				<SectionTitle>Contact</SectionTitle>
				<form
					action='https://formsubmit.co/c94e1eed968e8af34282467c031a69b1'
					method='POST'
					className='grid gap-5 text-black mb-10'
				>
					<input
						className='w-full xl:max-w-lg p-2 rounded text-xl'
						type='email'
						placeholder='your email'
						pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
						required
					/>
					<input
						className=''
						type='hidden'
						name='_subject'
						value='Rekrutacja'
						placeholder='subject'
						required
					/>
					<textarea
						className='p-2 rounded text-xl w-full xl:max-w-2xl h-40 xl:h-80 max-h-80'
						placeholder='message'
						name='message'
						required
					></textarea>
					<button
						className='bg-white w-full xl:max-w-xs py-3 text-xl rounded text-black'
						type='submit'
					>
						Submit
					</button>
				</form>
				<SocialLinks smallSize={false} />
			</div>
			<img src={background} alt='' className='hidden xl:block' />
			<ChangeSectionBtn isRight={false} sectionId='projects' sectionName='projects' />
			<Footer />
		</>
	</SectionWrapper>
);

export default Contact;
