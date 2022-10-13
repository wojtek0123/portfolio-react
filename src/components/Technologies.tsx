import reactIcon from '../assets/react-brands.svg';
import nextIcon from '../assets/nextjs-svgrepo-com.svg';
import typescriptIcon from '../assets/typescript-brand.svg';
import htmlIcon from '../assets/html5-brands.svg';
import cssIcon from '../assets/css3-brands.svg';
import javascriptIcon from '../assets/js-brands.svg';
import sassIcon from '../assets/sass-brand.svg';
import tailwindIcon from '../assets/tailwindcss-icon.svg';
import apolloIcon from '../assets/apollo-graphql-1.svg';
import prismaIcon from '../assets/prisma-2.svg';
import graphqlIcon from '../assets/graphql-logo-2.svg';
import angularIcon from '../assets/angular.svg';

const Technologies = () => (
	<>
		<h4 className='text-3xl mb-5 2xl:text-4xl'>Technologies that I used</h4>
		<div className='flex flex-wrap gap-5'>
			<img src={reactIcon} alt='react icon logo' className='h-14 2xl:h-14' />
			<img src={nextIcon} alt='nextjs icon logo' className='h-14 2xl:h-14' />
			<img src={typescriptIcon} alt='typescript icon logo' className='h-14 2xl:h-14' />
			<img src={graphqlIcon} alt='graphql icon logo' className='h-14 2xl:h-14' />
			<img src={apolloIcon} alt='apollo icon logo' className='h-14 2xl:h-14' />
			<img src={prismaIcon} alt='prisma icon logo' className='h-14 2xl:h-14' />
			<img src={javascriptIcon} alt='javascript icon logo' className='h-14 2xl:h-14' />
			<img src={tailwindIcon} alt='tailwindcss icon logo' className='h-14 2xl:h-14' />
			<img src={sassIcon} alt='sass icon logo' className='h-14 2xl:h-14' />
			<img src={cssIcon} alt='css3 icon logo' className='h-14 2xl:h-14' />
			<img src={htmlIcon} alt='html5 icon logo' className='h-14 2xl:h-14' />
		</div>
		<h4 className='text-3xl my-5 2xl:text-4xl'> I&apos;m currently learning</h4>
		<img src={angularIcon} alt='angular icon logo' className='h-14 2xl:h-14' />
	</>
);

export default Technologies;
