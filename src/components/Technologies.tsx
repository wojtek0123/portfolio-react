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
import jestIcon from '../assets/jest.svg';
import reactTestingLibraryIcon from '../assets/react-testing-library.svg';

const Technologies = () => (
	<>
		<h4 className='text-3xl mb-5 2xl:text-4xl'>Technologies that I used</h4>
		<div className='flex flex-wrap gap-5'>
			<img src={reactIcon} alt='react icon logo' className='h-14 2xl:h-14' title='React' />
			<img src={nextIcon} alt='nextjs icon logo' className='h-14 2xl:h-14' title='NextJS' />
			<img
				src={typescriptIcon}
				alt='typescript icon logo'
				className='h-14 2xl:h-14'
				title='TypeScript'
			/>
			<img src={graphqlIcon} alt='graphql icon logo' className='h-14 2xl:h-14' title='GraphQL' />
			<img src={apolloIcon} alt='apollo icon logo' className='h-14 2xl:h-14' title='Apollo' />
			<img src={prismaIcon} alt='prisma icon logo' className='h-14 2xl:h-14' title='Prisma' />
			<img
				src={javascriptIcon}
				alt='javascript icon logo'
				className='h-14 2xl:h-14'
				title='JavaScript'
			/>
			<img
				src={tailwindIcon}
				alt='tailwindcss icon logo'
				className='h-14 2xl:h-14'
				title='TailwindCSS'
			/>
			<img src={sassIcon} alt='sass icon logo' className='h-14 2xl:h-14' title='SASS' />
			<img src={cssIcon} alt='css3 icon logo' className='h-14 2xl:h-14' title='CSS' />
			<img src={htmlIcon} alt='html5 icon logo' className='h-14 2xl:h-14' title='HTML' />
		</div>
		<h4 className='text-3xl my-5 2xl:text-4xl'> I&apos;m currently learning</h4>
		<div className='flex flex-wrap items-center gap-5'>
			<img src={angularIcon} alt='angular icon logo' title='Angular' className='h-14 2xl:h-14' />
			<img src={jestIcon} alt='jest icon logo' title='Jest' className='h-14 2xl:h-14' />
			<img
				src={reactTestingLibraryIcon}
				alt='react testing library icon logo'
				className='h-14 2xl:h-14'
				title='React testing library'
			/>
		</div>
	</>
);

export default Technologies;
