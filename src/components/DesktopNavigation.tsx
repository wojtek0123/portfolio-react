import SocialLinks from './SocialLinks';
import {Link} from 'react-router-dom';

const DesktopNavigation: React.FC = () => (
	<div className='fixed top-0 left-0 right-0 justify-between items-center pt-5 hidden xl:flex px-10 z-20'>
		<Link to='/' className='text-lg'>
			Wojciech Pietraszuk
		</Link>
		<SocialLinks smallSize={true} />
	</div>
);

export default DesktopNavigation;
