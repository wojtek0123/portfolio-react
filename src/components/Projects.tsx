import {v4 as uuid} from 'uuid';
import SectionWrapper from './SectionWrapper';
import Technologies from './Technologies';
import {request, gql} from 'graphql-request';
import {useEffect, useState} from 'react';

type Project = {
	id: string;
	title: string;
	technologies: string[];
	order: number;
	image: {
		url: string;
	};
	githubLink: string;
	demoLink: string;
	description: string;
	createdAt: number;
	publishedAt: number;
};

const queryProjects = gql`
	query Projects {
		projects {
			createdAt
			demoLink
			description
			githubLink
			id
			publishedAt
			technologies
			title
			order
			updatedAt
			image {
				url
			}
		}
	}
`;

const Projects: React.FC = () => {
	const [projects, setProjects] = useState<Project[]>([]);
	const addDot = (text: string) => {
		text += '.';
		return text;
	};

	const getProjects = async () => {
		const response: {projects: Project[]} = await request(
			import.meta.env.VITE_CMS_API as string,
			queryProjects,
		);
		const sortedProjects = response.projects.sort((a, b) => a.order - b.order);
		setProjects(sortedProjects);
	};

	const technologiesNode = (
		<div className='hidden xl:block'>
			<Technologies />
		</div>
	);

	useEffect(() => {
		void (async () => getProjects())();
	}, []);

	return (
		<SectionWrapper sectionId='projects' title='Projects' childBelowTitle={technologiesNode}>
			<>
				{projects.map((project) => (
					<div key={project.id} className='w-full bg-black text-white'>
						<h2 className='mb-5 text-center text-2xl'>{project.title}</h2>
						<div className='grid xl:gap-5 2xl:grid-cols-2'>
							<a href={project.demoLink} rel='noopener noreferrer' target='_blank'>
								<img src={project.image.url} alt={`${project.title} home page screenshot`} />
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
										<span key={uuid()} className='rounded bg-white px-2 py-1 text-black'>
											{technology}
										</span>
									))}
								</div>
								<div className='mt-5 flex items-center justify-evenly text-white'>
									<a
										href={project.githubLink}
										rel='noopener noreferrer'
										target='_blank'
										className='rounded bg-yellow-500 px-5 py-2 text-black transition-colors hover:bg-yellow-600'
									>
										Github
									</a>
									{project.demoLink.length !== 0 && (
										<a
											href={project.demoLink}
											rel='noopener noreferrer'
											target='_blank'
											className='rounded bg-yellow-500 px-5 py-2 text-black transition-colors hover:bg-yellow-600'
										>
											Live
										</a>
									)}
								</div>
							</div>
						</div>
						<div className='my-10 h-[0.1rem] w-full bg-white'></div>
					</div>
				))}
				<div className='mb-2 flex items-center justify-center'>
					<a
						href='https://github.com/wojtek0123?tab=repositories'
						rel='noopener noreferrer'
						target='_blank'
						className='rounded border border-white bg-black px-5 py-3 text-xl text-white transition-colors hover:bg-zinc-900 sm:px-10'
					>
						See more on github
					</a>
				</div>
			</>
		</SectionWrapper>
	);
};

export default Projects;
