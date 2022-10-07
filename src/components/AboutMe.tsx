import SectionTitle from './SectionTitle';
import helloBackground from '../assets/undraw_hello.svg';

const AboutMe = () => (
	<section className='w-screen h-screen bg-black snap-start flex flex-col items-center justify-center'>
		<SectionTitle>About Me</SectionTitle>
		<div className='px-5'>
			<p className='mb-3 text-xl'>Hi, my name is Wojciech.</p>
			<p>
				{`I'm a student of computer science at the Warsaw University of Life
				Sciences. Currently, I'm in 5th term of engineering studies. My journey with frontend I
				began in July 2021. Since then, I have been constantly and regurarly gain knowledge about technologies use to built webpages UI.  I'm mostly interesed in new technologies and sports like cycling and
				running.`}
			</p>
		</div>
		<img src={helloBackground} alt='' className='mt-10' />
	</section>
);

export default AboutMe;
