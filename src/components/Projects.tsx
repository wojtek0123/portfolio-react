import SectionTitle from './SectionTitle';
import jobForDevsImage from '../assets/home-job-for-devs.png';
import restCountriesApiImage from '../assets/home-rest-countries-api.png';
import {v4 as uuid} from 'uuid';
import ChangeSectionBtn from './ChangeSectionBtn';
import SectionWrapper from './SectionWrapper';
import Technologies from './Technologies';

type Project = {
	id: string;
	title: string;
	technologies: string[];
	image: string;
	githubLink: string;
	demoLink: string;
};

const projects: Project[] = [
	{
		id: uuid(),
		title: 'Job for devs',
		technologies: ['nextjs', 'typescript', 'graphql', 'apollo', 'prisma', 'tailwind', 'next-auth'],
		image: jobForDevsImage,
		githubLink: 'https://github.com/wojtek0123/job-for-devs',
		demoLink: 'https://job-for-devs.vercel.app',
	},
	{
		id: uuid(),
		title: 'REST Countries API',
		technologies: ['react', 'typescript', 'rest api'],
		image: restCountriesApiImage,
		githubLink: 'https://github.com/wojtek0123/rest-countries-api',
		demoLink: 'https://rest-countries-api-sage.vercel.app',
	},
];

const Projects = () => (
	<SectionWrapper sectionId='projects'>
		<>
			<div className='flex flex-col justify-center items-start xl:pr-5'>
				<SectionTitle>Projects</SectionTitle>
				<div className='hidden xl:block'>
					<Technologies />
				</div>
			</div>
			<div className='overflow-y-scroll w-full max-h-[80vh] px-5  scrollbar-thumb-yellow-500 scrollbar-track-gray-100 scrollbar-thin scrollbar-rounded-[1rem]'>
				{projects.map((project) => (
					<div key={project.id} className='w-full text-white bg-black'>
						<h2 className='text-center text-2xl mb-5'>{project.title}</h2>
						<img src={project.image} alt={`${project.title} home page screenshot`} />
						<div className='flex flex-wrap'>
							{project.technologies.map((technology) => (
								<span key={uuid()} className='mr-2 my-1'>
									{technology}
								</span>
							))}
						</div>
						<div className='text-white flex items-center justify-evenly mt-5'>
							<a href={project.githubLink} rel='noopener'>
								Github
							</a>
							<a href={project.demoLink} rel='noopener'>
								Live
							</a>
						</div>
						<div className='w-full h-[0.1rem] bg-white mt-3 mb-10'></div>
					</div>
				))}
			</div>
			<ChangeSectionBtn isRight={false} sectionId='about-me' sectionName='about me' />
		</>
	</SectionWrapper>
);

export default Projects;
