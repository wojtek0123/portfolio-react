import PropTypes from 'prop-types';

const SectionTitle: React.FC<{children: string}> = ({children}) => (
	<h2 className='text-center capitalize text-4xl mb-10'>{children}</h2>
);

SectionTitle.propTypes = {
	children: PropTypes.string.isRequired,
};

export default SectionTitle;
