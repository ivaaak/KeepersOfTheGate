import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import DeviceCard from './DeviceCard';

const ProjectBox = () => {
  const currentDate = new Date();

  const formattedDateNow = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(currentDate);

  const devicesData = [
    { name: "Door 1", description: "a door in the office", formattedDate: formattedDateNow, statusPercentage: 80 },
    { name: "Thermometer", description: "a thermometer", formattedDate: formattedDateNow, statusPercentage: 95 },
  ];
    
  return (
    <div className="projects-section">
      <div className="projects-section-header">
        <p>Devices</p>
        <p className="time">{formattedDateNow}</p>
      </div>
      <div className="projects-section-line">
        <div className="projects-status">
          <div className="item-status">
            <span className="status-number">2</span>
            <span className="status-type">Active Devices</span>
          </div>
        </div>
        <div className="view-actions">
          <button className="view-btn grid-view active" title="Grid View">
            <FontAwesomeIcon icon={faPlus} /> {/* Plus icon added here */}
          </button>
        </div>
      </div>
      <div className="project-boxes jsGridView">
        {devicesData.map((device, index) => (
          <DeviceCard key={index} name={device.name} description={device.description} formattedDate={device.formattedDate} statusPercentage={device.statusPercentage} />
        ))}
      </div>
    </div>
  );
};

export default ProjectBox;
