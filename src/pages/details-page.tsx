import MobileNavigation from '../components/MobileNavigation';
import DesktopNavigation from '../components/DesktopNavigation';
import ReactMarkdown from 'react-markdown';
import {gql, request} from 'graphql-request';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import githubIcon from '../assets/github.svg';
import boxArrow from '../assets/box-arrow-up-right.svg';

type ProjectDetails = {
	id: string;
	video?: string;
	readme?: string;
	githubLink: string;
	demoLink: string;
	image: {
		url: string;
	};
};

export default function DetailsPage() {
	const [project, setProject] = useState<ProjectDetails>();
	const {id} = useParams();

	const getProjects = async () => {
		const queryProjects = gql`
			query Project {
				projects {
					id
					video
					readme
					githubLink
					demoLink
					image {
						url
					}
				}
			}
		`;

		const response = await request<{projects: ProjectDetails[]}>(
			// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
			import.meta.env.VITE_CMS_API,
			queryProjects,
		);

		const project = response.projects.filter((project) => project.id === id)[0];
		setProject(project);
	};

	useEffect(() => {
		void (async () => getProjects())();
	}, [id]);

	return (
		<div className='bg-black min-h-screen w-full text-white'>
			<MobileNavigation />
			<DesktopNavigation />
			<div className='xl:pt-16'>
				<header>
					{project?.video && (
						<iframe
							width='100%'
							className='h-[30vh] sm:h-[50vh] lg:h-[70vh]'
							allowFullScreen
							src='https://www.youtube.com/embed/kgYm2Gm8Ltc'
						></iframe>
					)}
					{!project?.video && (
						<img
							className='mx-auto object-cover'
							src={project?.image.url}
							alt='Screenshot of the project header'
						/>
					)}
				</header>
				<main className='max-w-4xl mx-auto pb-5 px-2 relative'>
					<div className='text-white flex items-center justify-evenly mt-5 gap-2'>
						<a
							href={project?.githubLink}
							rel='noopener noreferrer'
							target='_blank'
							className='flex gap-2 px-5 py-2 rounded hover:bg-yellow-500 transition-colors'
						>
							<img src={githubIcon} alt='github icon' />
							<span>repo</span>
						</a>
						<a
							href={project?.demoLink}
							rel='noopener noreferrer'
							target='_blank'
							className='flex gap-2 px-5 py-2 rounded hover:bg-yellow-500 transition-colors'
						>
							<img src={boxArrow} alt='live demo link' />
							<span>live</span>
						</a>
					</div>
					<ReactMarkdown className='markdown'>{project?.readme ?? ''}</ReactMarkdown>
				</main>
			</div>
		</div>
	);
}
