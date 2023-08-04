import './App.sass';
import Introduction from './Pages/Introduction/Introduction'
import Interests from './Pages/Interests/Interests'
import Work from './Pages/Work/Work';
import Projects from './Pages/Projects/Projects';
import Teaching from './Pages/Teaching/Teaching';
import Footer from './Pages/Footer/Footer';

export default function App() {
  return (
    <div className="app_toplevel">

        <Introduction />
        <Interests />
        <Work />
        <Projects />
        <Teaching />
        <Footer />


    </div>
  );
}