import PropTypes from 'prop-types';

const SectionWrapper: React.FC<{children: JSX.Element}> = ({children}) => <div>{children}</div>;

SectionWrapper.propTypes = {
	children: PropTypes.element.isRequired,
};

export default SectionWrapper;
