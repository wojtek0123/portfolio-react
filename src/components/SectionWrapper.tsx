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
		className='relative w-screen min-h-screen bg-black snap-start flex flex-col items-center justify-center'
	>
		<div className='grid xl:grid-cols-2 place-items-center max-w-[80vw] w-full xl:gap-10'>
			<div className='flex flex-col justify-center items-center w-full xl:items-center'>
				<div className='flex flex-col justify-center items-center w-full xl:items-center'>
					<h3 className='text-center capitalize text-4xl mb-16 sm:text-5xl xl:text-7xl'>{title}</h3>
					<div className='flex flex-col w-full items-center overflow-y-hidden overflow-x-hidden max-h-[65vh] xl:max-h-[80vh]'>
						{childBelowTitle}
					</div>
				</div>
			</div>
			<div className='flex flex-col w-full items-center overflow-y-auto overflow-x-hidden max-h-[65vh] xl:max-h-[80vh] scrollbar-thumb-yellow-500 scrollbar-track-gray-100 scrollbar-thin scrollbar-rounded-[1rem]'>
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
