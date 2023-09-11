import SectionTitle from './SectionTitle';
import SectionWrapper from './SectionWrapper';

const Experience = () => (
	<SectionWrapper sectionId='experience'>
		<>
			<div className='flex flex-col justify-center items-center xl:items-start xl:pr-5'>
				<SectionTitle>Experience</SectionTitle>
			</div>
			<div className='flex flex-col items-center overflow-y-auto overflow-x-hidden max-h-[65vh] xl:max-h-[80vh] scrollbar-thumb-yellow-500 scrollbar-track-gray-100 scrollbar-thin scrollbar-rounded-[1rem]'>
				<div className='flex gap-5'>
					<div className='flex flex-col items-center gap-4 mt-5'>
						<div className='rounded-full w-2 h-2 bg-white'></div>
						<div className='bg-white w-[1px] h-full'></div>
					</div>
					<div className='flex flex-col'>
						<span className='text-3xl font-bold text-yellow-500 2xl:text-5xl'>CloudFerro S.A.</span>
						<span className='text-sm mb-3 2xl:text-xl'>03.07.2023 - 29.09.2023</span>
						<span className='text-xl mt-3 mb-5 2xl:text-2xl'>
							Trainee Front-end Developer (Angular)
						</span>
					</div>
				</div>
			</div>
		</>
	</SectionWrapper>
);

export default Experience;
