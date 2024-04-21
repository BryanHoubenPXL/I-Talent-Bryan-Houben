import React from 'react';
import '../../style/activity.css'; // Make sure this path is correct

function ActivityCard({ activity }) {
  return (
    <div className="activity-card">
      <div className="activity-title">{activity.title}</div>
      <p className="activity-description">{activity.description}</p>
      <div className="activity-info">
        <span className="activity-date">{activity.date}</span>
        <span> | Duration: {activity.duration_hours} hours</span>
      </div>
    </div>
  );
}

function ActivitiesList({ activities }) {
  return (
    <div className="activity-container">
      {activities.map((activity, index) => (
        <ActivityCard key={index} activity={activity} />
      ))}
    </div>
  );
}

export default ActivitiesList;
