import SocialLinks from './SocialLinks';

const DesktopNavigation: React.FC = () => (
	<div className='fixed top-0 left-0 right-0 justify-between items-center pt-5 hidden xl:flex px-10 z-20'>
		<h1>Wojciech Pietraszuk</h1>
		<SocialLinks smallSize={true} />
	</div>
);

export default DesktopNavigation;
