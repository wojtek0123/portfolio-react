import MobileNavigation from '../components/MobileNavigation';
import DesktopNavigation from '../components/DesktopNavigation';
import ReactMarkdown from 'react-markdown';
import {gql, request} from 'graphql-request';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import githubIcon from '../assets/github.svg';
import boxArrow from '../assets/box-arrow-up-right.svg';
import LoadingSpinner from '../components/LoadingSpinner';

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

type Status = 'idle' | 'failed' | 'loading' | 'succeed';

export default function DetailsPage() {
	const [project, setProject] = useState<ProjectDetails>();
	const {id} = useParams();
	const [status, setStatus] = useState<Status>('idle');

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

		if (response.projects.length === 0) {
			setStatus('failed');
			return;
		}

		const project = response.projects.filter((project) => project.id === id)[0];
		setProject(project);
		setStatus('succeed');
	};

	useEffect(() => {
		setStatus('loading');
		void (async () => getProjects())();
	}, [id]);

	if (status === 'loading') {
		return <LoadingSpinner />;
	}

	return (
		<div className='min-h-screen w-full bg-black text-white'>
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
							className='mx-auto object-cover lg:max-h-[70vh]'
							src={project?.image.url}
							alt='Screenshot of the project header'
						/>
					)}
				</header>
				<main className='relative mx-auto max-w-4xl px-2 pb-5'>
					<div className='mt-5 flex items-center justify-evenly gap-2 text-white'>
						<a
							href={project?.githubLink}
							rel='noopener noreferrer'
							target='_blank'
							className='flex gap-2 rounded border border-black px-5 py-2 transition-colors hover:border-slate-300'
						>
							<img src={githubIcon} alt='github icon' />
							<span>repo</span>
						</a>
						{project?.demoLink && (
							<a
								href={project.demoLink}
								rel='noopener noreferrer'
								target='_blank'
								className='flex gap-2 rounded border border-black px-5 py-2 transition-colors hover:border-slate-300'
							>
								<img src={boxArrow} alt='live demo link' />
								<span>live</span>
							</a>
						)}
					</div>
					<ReactMarkdown className='markdown'>{project?.readme ?? ''}</ReactMarkdown>
				</main>
			</div>
		</div>
	);
}
