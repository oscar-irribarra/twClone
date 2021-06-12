import './App.css';
import { LeftSidebar } from './components/left-sidebar/left-sidebar';
import { Main } from './components/main/main';
import { RightSidebar } from './components/right-sidebar/right-sidebar';

function App() {
  return (

    <main className=" bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50 min-h-screen min-w-min" >
      <div className="flex flex-grow justify-center pt-1">

        <div className="hidden md:block lg:w-56">
          <LeftSidebar />
        </div>

        <div className="w-full md:max-w-prose md:px-2 md:mx-6" >
          <Main />
        </div>

        <div className="hidden xl:block w-80">
          <RightSidebar />
        </div>
      </div>

    </main>
  );
}

export default App;
