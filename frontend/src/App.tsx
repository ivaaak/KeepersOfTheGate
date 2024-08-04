import React from 'react';
import AppHeader from './components/AppHeader';
import AppSidebar from './components/AppSidebar';
import ProjectBox from './components/ProjectBox';
import MessagesSection from './components/MessagesSection';
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

