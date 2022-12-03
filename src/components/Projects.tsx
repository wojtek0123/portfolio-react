import SectionTitle from './SectionTitle';
import {v4 as uuid} from 'uuid';
import ChangeSectionBtn from './ChangeSectionBtn';
import SectionWrapper from './SectionWrapper';
import Technologies from './Technologies';
import {request, gql} from 'graphql-request';
import {useEffect, useState} from 'react';
import {useInView} from 'react-intersection-observer';
import PropTypes from 'prop-types';

type Project = {
	id: string;
	title: string;
	technologies: string[];
	image: {
		url: string;
	};
	githubLink: string;
	demoLink: string;
	description: string;
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
			updatedAt
			image {
				url
			}
		}
	}
`;

const Projects: React.FC<{onVisible: (value: boolean) => void}> = ({onVisible}) => {
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
		setProjects(response.projects);
	};

	useEffect(() => {
		void (async () => getProjects())();
	}, []);

	const {ref, inView} = useInView({
		threshold: 0.5,
	});

	useEffect(() => {
		onVisible(inView);
	}, [inView]);

	return (
		<SectionWrapper sectionId='projects'>
			<>
				<div className='flex flex-col justify-center items-center xl:items-start xl:pr-5' ref={ref}>
					<SectionTitle>Projects</SectionTitle>
					<div className='hidden xl:block'>
						<Technologies />
					</div>
				</div>
				<div className='overflow-y-scroll w-full max-h-[65vh] xl:max-h-[80vh] pr-5 pl-1 xl:pl-0  scrollbar-thumb-yellow-500 scrollbar-track-gray-100 scrollbar-thin scrollbar-rounded-[1rem]'>
					{projects.map((project) => (
						<div key={project.id} className='w-full text-white bg-black'>
							<h2 className='text-center text-2xl mb-5'>{project.title}</h2>
							<div className='grid 2xl:grid-cols-2 xl:gap-5'>
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
											className='bg-yellow-500 text-black px-5 py-2 rounded hover:bg-yellow-600 transition-colors'
										>
											Github
										</a>
										{project.demoLink.length !== 0 && (
											<a
												href={project.demoLink}
												rel='noopener noreferrer'
												target='_blank'
												className='bg-yellow-500 text-black px-5 py-2 rounded hover:bg-yellow-600 transition-colors'
											>
												Live
											</a>
										)}
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
							className='border border-white bg-black text-white px-5 py-3 rounded hover:bg-zinc-900 transition-colors text-xl sm:px-10'
						>
							See more
						</a>
					</div>
				</div>
			</>
		</SectionWrapper>
	);
};

Projects.propTypes = {
	onVisible: PropTypes.func.isRequired,
};

export default Projects;
