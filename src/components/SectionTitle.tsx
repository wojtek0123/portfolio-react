import PropTypes from 'prop-types';

const SectionTitle: React.FC<{children: string}> = ({children}) => (
	<h3 className='text-center capitalize text-4xl mb-10 sm:text-5xl xl:text-start xl:text-7xl'>
		{children}
	</h3>
);

SectionTitle.propTypes = {
	children: PropTypes.string.isRequired,
};

export default SectionTitle;
