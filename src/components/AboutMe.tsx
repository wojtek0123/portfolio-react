import SectionTitle from './SectionTitle';
import helloBackground from '../assets/undraw_hello.svg';
import SectionWrapper from './SectionWrapper';
import SocialLinks from './SocialLinks';

const AboutMe: React.FC = () => (
	<SectionWrapper sectionId='about-me'>
		<>
			<div>
				<SectionTitle>About Me</SectionTitle>
				<div className='px-5 xl:px-0'>
					<p className='mb-3 text-2xl xl:text-3xl'>Hi, my name is Wojciech.</p>
					<p className='xl:text-xl'>
						I&apos;m a student of computer science at the Warsaw University of Life Sciences.
						Currently, I&apos;m in 5th term of engineering studies.
					</p>
					<p className='mt-2 xl:text-xl'>
						My journey with frontend I began in July 2021. Since then, I have been constantly and
						regurarly gain knowledge about technologies use to built webpages UI.
					</p>
					<p className='mt-2 xl:text-xl'>
						I&apos;m mostly interested in new technologies and sports like cycling and running.
					</p>
				</div>
				<div className='mt-10 hidden sm:px-5 sm:flex sm:flex-col xl:px-0'>
					<SocialLinks smallSize={false} />
					<p className='mt-5 text-2xl tracking-wider'>wojtekpietraszuk@gmail.com</p>
				</div>
			</div>
			<img
				src={helloBackground}
				alt='The boy sit on the chair and waving. There is a desk with personal computer and many books to read'
				className='mt-10'
			/>
		</>
	</SectionWrapper>
);

export default AboutMe;
