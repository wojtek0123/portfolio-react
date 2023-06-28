import SectionTitle from './SectionTitle';
import {v4 as uuid} from 'uuid';
import SectionWrapper from './SectionWrapper';
import Technologies from './Technologies';
import {request, gql} from 'graphql-request';
import {useEffect, useState} from 'react';
import {useInView} from 'react-intersection-observer';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

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
			import.meta.env.VITE_CMS_API,
			queryProjects,
		);
		const sortedProjects = response.projects.sort((a, b) => a.order - b.order);
		setProjects(sortedProjects);
	};

	useEffect(() => {
		void (async () => getProjects())();
	}, []);

	return (
		<SectionWrapper sectionId='projects'>
			<>
				<div className='flex flex-col justify-center items-center xl:items-start xl:pr-5'>
					<SectionTitle>Projects</SectionTitle>
					<div className='hidden xl:block'>
						<Technologies />
					</div>
				</div>
				<div className='overflow-y-scroll w-full max-h-[65vh] xl:max-h-[80vh] pr-5 pl-1 xl:pl-0  scrollbar-thumb-[#2f2e41] scrollbar-track-gray-100 scrollbar-thin scrollbar-rounded-[1rem]'>
					{projects.map((project) => (
						<div key={project.id} className='w-full text-white bg-black'>
							<h2 className='text-center text-2xl mb-5'>{project.title}</h2>
							<div className='grid 2xl:grid-cols-2 xl:gap-5'>
								<a href={project.demoLink} rel='noopener noreferrer' target='_blank'>
									<img
										src={project.image.url}
										alt={`${project.title} home page screenshot`}
										loading='lazy'
									/>
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
											<span key={uuid()} className='text-white  bg-[#2f2e41] px-2 py-1 rounded'>
												{technology}
											</span>
										))}
									</div>
									<div className='text-white flex items-center justify-evenly mt-5'>
										<a
											href={project.githubLink}
											rel='noopener noreferrer'
											target='_blank'
											className='bg-white text-black px-5 py-2 rounded hover:bg-slate-300 transition-colors'
										>
											Github
										</a>
										{project.demoLink.length !== 0 && (
											<a
												href={project.demoLink}
												rel='noopener noreferrer'
												target='_blank'
												className='bg-white text-black px-5 py-2 rounded hover:bg-slate-300 transition-colors'
											>
												Live
											</a>
										)}
										<Link
											className='bg-white text-black px-5 py-2 rounded hover:bg-slate-300 transition-colors'
											to={`/project/${project.id}`}
										>
											Details
										</Link>
									</div>
								</div>
							</div>
							<div className='w-full h-[0.1rem] bg-white my-10'></div>
						</div>
					))}
					<div className='flex items-center justify-center mb-2'>
						<a
							href='https://github.com/wojtek0123?tab=repositories'
							rel='noopener noreferrer'
							target='_blank'
							className='bg-white text-black px-5 py-3 rounded hover:bg-slate-300 transition-colors text-xl sm:px-10'
						>
							Github repos
						</a>
					</div>
				</div>
			</>
		</SectionWrapper>
	);
};

export default Projects;
