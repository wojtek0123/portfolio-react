import PropTypes from 'prop-types';

const SectionWrapper: React.FC<{children: JSX.Element; sectionId: string}> = ({
	children,
	sectionId,
}) => (
	<section
		id={sectionId}
		className='relative w-screen h-screen bg-black snap-start flex flex-col items-center justify-center'
	>
		<div className='grid xl:grid-cols-2 max-w-[80vw] w-full'>{children}</div>
	</section>
);

SectionWrapper.propTypes = {
	children: PropTypes.element.isRequired,
	sectionId: PropTypes.string.isRequired,
};

export default SectionWrapper;
