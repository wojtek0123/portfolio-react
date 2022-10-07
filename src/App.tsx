import AboutMe from './components/AboutMe';
import Header from './components/Header';

const App = () => (
	<div className='snap-y snap-mandatory h-screen overflow-y-scroll bg-black text-white overflow-x-hidden'>
		<Header />
		<AboutMe />
	</div>
);

export default App;
