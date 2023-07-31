import './App.sass';
import Introduction from './Pages/Introduction/Introduction.js'
import Interests from './Pages/Interests/Interests.js'

export default function App() {
  return (
    <div className="app_toplevel">
    
      <Introduction />
      <Interests />

    </div>
  );
}