import SocialLinks from './SocialLinks';
import {Link} from 'react-router-dom';

const DesktopNavigation: React.FC = () => (
	<div className='fixed left-0 right-0 top-0 z-20 hidden items-center justify-between px-10 pt-5 xl:flex'>
		<Link to='/' className='text-lg'>
			Wojciech Pietraszuk
		</Link>
		<SocialLinks smallSize={true} />
	</div>
);

export default DesktopNavigation;
