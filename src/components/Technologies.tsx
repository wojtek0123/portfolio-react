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
import rxjsIcon from '../assets/rxjs_logo.svg';

const Technologies = () => (
	<>
		<h4 className='mb-5 text-3xl 2xl:text-4xl'>Technologies that I used in my projects</h4>
		<div className='scrollbar-rounded-[1rem] flex max-h-[65vh] w-full flex-wrap gap-5 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-yellow-500 xl:max-h-[80vh]'>
			<img src={angularIcon} alt='angular icon logo' title='Angular' className='h-14 2xl:h-14' />
			<img src={rxjsIcon} alt='graphql icon logo' className='h-14 2xl:h-14' title='RxJS' />
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
