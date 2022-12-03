import PropTypes from 'prop-types';

const SectionWrapper: React.FC<{children: JSX.Element; sectionId: string}> = ({
	children,
	sectionId,
}) => (
	<section
		id={sectionId}
		className='xl:sticky top-0 z-10 overflow-hidden w-screen min-h-screen bg-black flex flex-col items-center justify-center'
	>
		<div className='grid xl:grid-cols-2 max-w-[80vw] w-full'>{children}</div>
	</section>
);

SectionWrapper.propTypes = {
	children: PropTypes.element.isRequired,
	sectionId: PropTypes.string.isRequired,
};

export default SectionWrapper;
