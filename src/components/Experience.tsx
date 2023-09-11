import SectionWrapper from './SectionWrapper';

const Experience = () => (
	<SectionWrapper sectionId='experience' title='Experience'>
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
	</SectionWrapper>
);

export default Experience;
