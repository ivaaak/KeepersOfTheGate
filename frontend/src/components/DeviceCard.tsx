import React from 'react';

interface DeviceCardProps {
    name: string;
    description: string;
    formattedDate: string;
    statusPercentage: number;
}

const DeviceCard: React.FC<DeviceCardProps> = ({ name, description, formattedDate, statusPercentage }) => {
    return (
        <div className="project-box-wrapper">
            <div className="project-box" style={{ backgroundColor: '#fee4cb' }}>
                <div className="project-box-header">
                    <span>Added: {formattedDate}</span>
                </div>
                <div className="project-box-content-header">
                    <p className="box-content-header">{name}</p>
                    <p className="box-content-subheader">{description}</p>
                </div>
                <div className="box-progress-wrapper">
                    <p className="box-progress-header">Status</p>
                    <div className="box-progress-bar">
                        <span className="box-progress" style={{ width: `${statusPercentage}%`, backgroundColor: '#ff942e' }}></span>
                    </div>
                    <p className="box-progress-percentage">{statusPercentage}%</p>
                </div>
                <div className="project-box-footer">
                    <div className="participants">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="participant" />
                        <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="participant" />
                        <button className="add-participant" style={{ color: '#ff942e' }}>
                        </button>
                    </div>
                    <div className="days-left" style={{ color: '#ff942e' }}>
                        2 Days Left
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeviceCard;
