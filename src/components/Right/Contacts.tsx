import { commonStyles } from "../../commonStyles";
import { contacts } from "./constants";
import { contactsStyles } from "./styles";

const Contacts = () => {
  return (
    <div>
      <span style={commonStyles.sectionTitle}>Contacts</span>
      <div style={contactsStyles.itemsContainer}>
        {contacts?.map((contact) => {
          return (
            <div key={contact.id} style={contactsStyles.contactItem}>
              <div style={contactsStyles.imageContainer}>
                <img
                  src={`/${contact.image}.png`}
                  style={contactsStyles.image}
                  alt="User avatar"
                />
              </div>
              <div style={contactsStyles.textContainer}>
                <p style={contactsStyles.contactName}>{contact.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contacts;
