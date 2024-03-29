import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom';
import HomePage from './pages/home-page';
import DetailsPage from './pages/details-page';

const routes = createBrowserRouter([
	{
		path: '',
		element: <HomePage />,
	},
	{
		path: '/project/:id',
		element: <DetailsPage />,
	},
	{
		path: '*',
		element: <Navigate to='/' replace={true} />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={routes}></RouterProvider>
	</React.StrictMode>,
);
