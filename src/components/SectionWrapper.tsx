import PropTypes from 'prop-types';
import React from 'react';

const SectionWrapper: React.FC<{
	sectionId: string;
	title: string;
	childBelowTitle?: React.ReactNode;
	children?: React.ReactNode;
}> = ({children, sectionId, title, childBelowTitle}) => (
	<section
		id={sectionId}
		className='relative flex min-h-screen w-screen snap-start flex-col items-center justify-center bg-black'
	>
		<div className='grid w-full max-w-[80vw] place-items-center xl:grid-cols-2 xl:gap-10'>
			<div className='flex w-full flex-col items-center justify-center xl:items-center'>
				<div className='flex w-full flex-col items-center justify-center xl:items-center'>
					<h3 className='mb-16 text-center text-4xl capitalize sm:text-5xl xl:text-7xl'>{title}</h3>
					<div className='flex max-h-[65vh] w-full flex-col items-center overflow-x-hidden overflow-y-hidden xl:max-h-[80vh]'>
						{childBelowTitle}
					</div>
				</div>
			</div>
			<div className='scrollbar-rounded-[1rem] flex max-h-[65vh] w-full flex-col items-center overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-yellow-500 xl:max-h-[80vh]'>
				{children}
			</div>
		</div>
	</section>
);

SectionWrapper.propTypes = {
	sectionId: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	children: PropTypes.element,
	childBelowTitle: PropTypes.element,
};

export default SectionWrapper;
