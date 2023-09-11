const Footer = () => (
	<footer className='flex xl:hidden'>
		<div className='absolute bottom-3 left-0 right-0 flex flex-col text-center tracking-wider'>
			<div className='mb-3 h-[0.05rem] w-full bg-white'></div>
			<p>webpage created by Wojciech Pietraszuk</p>
			<span>{new Date().getFullYear()}</span>
		</div>
	</footer>
);

export default Footer;
