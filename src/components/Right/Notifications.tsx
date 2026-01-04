import { commonStyles } from "../../commonStyles";
import { notifications } from "./constants";
import { notificationsStyles } from "./styles";

const Notifications = () => {
  return (
    <div>
      <span style={commonStyles.sectionTitle}>Notifications</span>
      <div style={notificationsStyles.itemsContainer}>
        {notifications?.map((notification) => {
          const Icon = notification.icon;
          return (
            <div
              key={notification.id}
              style={notificationsStyles.notificationItem}
            >
              <div style={notificationsStyles.iconContainer}>
                <Icon size={24} color="var(--notification-icon-fill)" />
              </div>
              <div style={notificationsStyles.textContainer}>
                <p style={notificationsStyles.notificationText}>
                  {notification.text}
                </p>
                <span style={notificationsStyles.timeText}>
                  {notification.time}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notifications;
