import helloBackground from '../assets/undraw_hello.svg';
import SectionWrapper from './SectionWrapper';
import SocialLinks from './SocialLinks';

const AboutMe: React.FC = () => {
	const aboutMeTextNode = (
		<div className='flex flex-col'>
			<div className='px-5 xl:px-0'>
				<p className='mb-3 text-2xl xl:text-4xl'>Hi, my name is Wojtek.</p>
				<p className='xl:text-2xl'>
					I&apos;m a student of computer science at the Warsaw University of Life Sciences.
					Currently, I&apos;m in 7th term of engineering studies.
				</p>
				<p className='mt-2 xl:text-2xl'>
					I started my adventure with front-end development in July 2021. Since then, I have been
					continuously acquiring knowledge on this subject.
				</p>
				<p className='mt-2 xl:text-2xl'>
					I&apos;m interested in new technologies and sports like cycling and running.
				</p>
			</div>
			<div className='mt-10 hidden sm:flex sm:flex-col sm:px-5 xl:px-0'>
				<SocialLinks smallSize={false} />
				<p className='mt-5 text-2xl tracking-wider'>wojtekpietraszuk@gmail.com</p>
			</div>
		</div>
	);

	return (
		<SectionWrapper sectionId='about-me' title='About me' childBelowTitle={aboutMeTextNode}>
			<img
				src={helloBackground}
				alt='The boy sit on the chair and waving. There is a desk with personal computer and many books to read'
				className='mt-10'
			/>
		</SectionWrapper>
	);
};

export default AboutMe;
