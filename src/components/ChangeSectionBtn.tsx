import arrowRight from '../assets/arrow-right.svg';
import arrowLeft from '../assets/arrow-left.svg';
import PropTypes from 'prop-types';

const ChangeSectionBtn: React.FC<{sectionName: string; isRight: boolean; sectionId: string}> = ({
	sectionName,
	isRight,
	sectionId,
}) => {
	const changeButtonPosition = () => {
		if (isRight) {
			return 'right-0 translate-x-1/3 rotate-90';
		}

		return 'left-0 -translate-x-1/3 -rotate-90';
	};

	if (isRight) {
		return (
			<div
				className={`absolute hidden w-56 xl:block text-2xl top-1/2 -translate-y-1/2 bg-yellow-500 border-white px-5 rounded animate-pulse ${changeButtonPosition()}`}
			>
				<a href={`#${sectionId}`} className='flex items-center justify-center rounded px-3 py-3'>
					<p className='font-extralight text-black lowercase'>go to {sectionName}</p>
					<img src={arrowRight} alt='' className='-rotate-90  w-6 h-6 ml-3' />
				</a>
			</div>
		);
	}

	return (
		<div
			className={`absolute hidden w-56 xl:block text-2xl top-1/2 -translate-y-1/2 bg-yellow-500 border-white px-5 rounded animate-pulse ${changeButtonPosition()}`}
		>
			<a href={`#${sectionId}`} className='flex items-center justify-center rounded px-3 py-3'>
				<img src={arrowLeft} alt='' className='rotate-90  w-6 h-6 mr-3' />
				<p className='font-extralight text-black lowercase'>go to {sectionName}</p>
			</a>
		</div>
	);
};

ChangeSectionBtn.propTypes = {
	sectionName: PropTypes.string.isRequired,
	isRight: PropTypes.bool.isRequired,
	sectionId: PropTypes.string.isRequired,
};

export default ChangeSectionBtn;
