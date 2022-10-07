import SectionTitle from './SectionTitle';
import jobForDevsImage from '../assets/home-job-for-devs.png';
import {v4 as uuid} from 'uuid';

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
];

const Projects = () => (
	<div className='w-screen h-screen bg-black snap-center flex flex-col items-center justify-center'>
		<SectionTitle>Projects</SectionTitle>
		<div className='overflow-y-scroll w-full max-w-[1400px] h-3/4 px-5'>
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
					<div className='w-full h-[0.1rem] bg-white my-3'></div>
				</div>
			))}
		</div>
	</div>
);

export default Projects;
