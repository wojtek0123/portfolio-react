const Footer = () => (
	<footer className='h-screen flex flex-col items-center justify-center snap-center relative'>
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
		<p className='absolute bottom-1 left-0 right-0 text-center flex flex-col tracking-wider'>
			webpage created by Wojciech Pietraszuk
			<span>{new Date().getFullYear()}</span>
		</p>
	</footer>
);

export default Footer;
