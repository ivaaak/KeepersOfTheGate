import React from 'react';
import AppHeader from './components/AppHeader'; // Import your AppHeader component here
import AppSidebar from './components/AppSidebar'; // Import your AppSidebar component here
import ProjectBox from './components/ProjectBox'; // Import your ProjectsSection component here
import MessagesSection from './components/MessagesSection'; // Import your MessagesSection component here
MessagesSection
const App: React.FC = () => {
  return (
    <>
      <AppHeader />
      <div className="app-content">
        <AppSidebar />
        <ProjectBox /> 
        <MessagesSection /> 
      </div>
    </>
  );
};

export default App;

