const Footer = () => (
	<footer
		className='h-screen flex flex-col items-center justify-center snap-center relative xl:hidden'
		id='footer'
	>
		<div className='flex flex-col items-center mb-10'>
			<a className='text-xl mb-3' href='https://github.com/wojtek0123' rel='noopener'>
				Github
			</a>
			<a
				className='text-xl my-3'
				href='https://www.linkedin.com/in/wojciech-pietraszuk-333159199/'
				rel='noopener'
			>
				LinkedIn
			</a>
			<a className='text-xl my-3' href='https://www.facebook.com/wojtus.pietraszuk/' rel='noopener'>
				Facebook
			</a>
			<a className='text-xl mt-3 capitalize' href='mailto:wojtekpietraszuk@gmail.com'>
				send email
			</a>
		</div>
		<div className='absolute bottom-3 left-0 right-0 text-center flex flex-col tracking-wider'>
			<div className='w-full h-[0.05rem] bg-white mb-3'></div>
			<p>webpage created by Wojciech Pietraszuk</p>
			<span>{new Date().getFullYear()}</span>
		</div>
	</footer>
);

export default Footer;
