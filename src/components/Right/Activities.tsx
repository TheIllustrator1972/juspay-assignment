import { commonStyles } from "../../commonStyles";
import { activities } from "./constants";
import { activitiesStyles } from "./styles";

const Activities = () => {
  return (
    <div>
      <span style={commonStyles.sectionTitle}>Activities</span>
      <div style={activitiesStyles.itemsContainer}>
        {activities?.map((activity, index) => {
          return (
            <div key={activity.id} style={activitiesStyles.activityItem}>
              <div style={activitiesStyles.imageContainer}>
                <img
                  src={`/${activity.image}.png`}
                  style={activitiesStyles.image}
                  alt="User avatar"
                />
                {index !== activities.length - 1 && (
                  <div style={activitiesStyles.verticalDivider} />
                )}
              </div>
              <div style={activitiesStyles.textContainer}>
                <p style={activitiesStyles.activityText}>{activity.text}</p>
                <span style={activitiesStyles.timeText}>{activity.time}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Activities;
