import SectionTitle from './SectionTitle';
import helloBackground from '../assets/undraw_hello.svg';
import ChangeSectionBtn from './ChangeSectionBtn';

const AboutMe = () => (
	<section
		className='relative w-screen h-screen bg-black snap-start flex flex-col items-center justify-center'
		id='about-me'
	>
		<SectionTitle>About Me</SectionTitle>
		<div className='px-5'>
			<p className='mb-3 text-2xl'>Hi, my name is Wojciech.</p>
			<p>
				I&apos;m a student of computer science at the Warsaw University of Life Sciences. Currently,
				I&apos;m in 5th term of engineering studies.
			</p>
			<p className='mt-2'>
				My journey with frontend I began in July 2021. Since then, I have been constantly and
				regurarly gain knowledge about technologies use to built webpages UI.
			</p>
			<p className='mt-2'>
				I&apos;m mostly interesed in new technologies and sports like cycling and running.
			</p>
		</div>
		<img src={helloBackground} alt='' className='mt-10' />
		<ChangeSectionBtn isRight={true} sectionId='projects' sectionName='projects' />
		<ChangeSectionBtn isRight={false} sectionId='header' sectionName='home' />
	</section>
);

export default AboutMe;
