import SectionWrapper from './SectionWrapper';

const Experience = () => (
	<SectionWrapper sectionId='experience' title='Experience'>
		<div className='flex gap-5'>
			<div className='mt-5 flex flex-col items-center gap-4'>
				<div className='h-2 w-2 rounded-full bg-white'></div>
				<div className='h-full w-[1px] bg-white'></div>
			</div>
			<div className='flex flex-col'>
				<span className='text-3xl font-bold text-yellow-500 2xl:text-5xl'>CloudFerro S.A.</span>
				<span className='mb-3 text-sm 2xl:text-xl'>03.07.2023 - present</span>
				<span className='mb-5 mt-3 text-xl 2xl:text-2xl'>
					Trainee Front-end Developer (Angular)
				</span>
			</div>
		</div>
	</SectionWrapper>
);

export default Experience;
