import PropTypes from 'prop-types';

const SectionWrapper: React.FC<{children: JSX.Element}> = ({children}) => (
	<div className='grid xl:grid-cols-2 max-w-[80vw] w-full'>{children}</div>
);

SectionWrapper.propTypes = {
	children: PropTypes.element.isRequired,
};

export default SectionWrapper;
