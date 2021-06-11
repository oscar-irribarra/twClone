import './App.css';
import { LeftSidebar } from './components/left-sidebar/left-sidebar';
import { RightSidebar } from './components/right-sidebar/right-sidebar';

function App() {
  return (

    <main className="flex flex-grow justify-center bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50 min-h-screen min-w-min" >
      <LeftSidebar />
      <div className="p-32" ></div>

      <div className="hidden md:block">
        <RightSidebar />
      </div>

    </main>
  );
}

export default App;
