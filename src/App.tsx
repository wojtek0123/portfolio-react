import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';

const App = () => (
	<div className='snap-y snap-mandatory h-screen overflow-y-scroll bg-black text-white overflow-x-hidden'>
		<Header />
		<AboutMe />
		<Projects />
		<Footer />
	</div>
);

export default App;
