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
	description: string;
};

const projects: Project[] = [
	{
		id: uuid(),
		title: 'Job for devs',
		technologies: ['nextjs', 'typescript', 'graphql', 'apollo', 'prisma', 'tailwind', 'next-auth'],
		image: jobForDevsImage,
		githubLink: 'https://github.com/wojtek0123/job-for-devs',
		demoLink: 'https://job-for-devs.vercel.app',
		description:
			'Fullstack application for developers who want to find a job or hire someone. \n User can: login, add new offer apply for existing offer, see applications for his offer, see his applications on other people offers and his, posted offers can be filter by title, seniority, city, technologies and category change name in profile name',
	},
	{
		id: uuid(),
		title: 'REST Countries API',
		technologies: ['react', 'typescript', 'rest api'],
		image: restCountriesApiImage,
		githubLink: 'https://github.com/wojtek0123/rest-countries-api',
		demoLink: 'https://rest-countries-api-sage.vercel.app',
		description: 'Frontend mentor challenge. App helps to find out more about countries',
	},
];

const Projects = () => {
	const addDot = (text: string) => {
		text += '.';
		return text;
	};

	return (
		<SectionWrapper sectionId='projects'>
			<>
				<div className='flex flex-col justify-center items-center xl:items-start xl:pr-5'>
					<SectionTitle>Projects</SectionTitle>
					<div className='hidden xl:block'>
						<Technologies />
					</div>
				</div>
				<div className='overflow-y-scroll w-full max-h-[80vh] pr-5 pl-1 xl:pl-0  scrollbar-thumb-yellow-500 scrollbar-track-gray-100 scrollbar-thin scrollbar-rounded-[1rem]'>
					{projects.map((project) => (
						<div key={project.id} className='w-full text-white bg-black'>
							<h2 className='text-center text-2xl mb-5'>{project.title}</h2>
							<div className='grid 2xl:grid-cols-2 xl:gap-5'>
								<a href={project.demoLink} rel='noopener noreferrer' target='_blank'>
									<img src={project.image} alt={`${project.title} home page screenshot`} />
								</a>
								<div className='mt-5 xl:mt-0'>
									<div className='text-lg'>
										{project.description.split('. ').map((text) => (
											<p key={uuid()}>{addDot(text)}</p>
										))}
									</div>

									<h4 className='mt-3 text-lg'>Built with:</h4>
									<div className='flex flex-wrap gap-1'>
										{project.technologies.map((technology) => (
											<span key={uuid()} className='text-black bg-white px-2 py-1 rounded'>
												{technology}
											</span>
										))}
									</div>
									<div className='text-white flex items-center justify-evenly mt-5'>
										<a
											href={project.githubLink}
											rel='noopener noreferrer'
											target='_blank'
											className='bg-yellow-500 text-black px-5 py-2 rounded'
										>
											Github
										</a>
										<a
											href={project.demoLink}
											rel='noopener noreferrer'
											target='_blank'
											className='bg-yellow-500 text-black px-5 py-2 rounded'
										>
											Live
										</a>
									</div>
								</div>
							</div>
							<div className='w-full h-[0.1rem] bg-white my-10'></div>
						</div>
					))}
				</div>
				<ChangeSectionBtn isRight={false} sectionId='about-me' sectionName='about me' />
				<ChangeSectionBtn isRight={true} sectionId='contact' sectionName='contact' />
			</>
		</SectionWrapper>
	);
};

export default Projects;
