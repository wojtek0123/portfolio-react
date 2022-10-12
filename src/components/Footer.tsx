const Footer = () => (
	<footer className='flex xl:hidden'>
		<div className='absolute bottom-3 left-0 right-0 text-center flex flex-col tracking-wider'>
			<div className='w-full h-[0.05rem] bg-white mb-3'></div>
			<p>webpage created by Wojciech Pietraszuk</p>
			<span>{new Date().getFullYear()}</span>
		</div>
	</footer>
);

export default Footer;
