import React from 'react';

const ContactForm = props => {
  return(
    <div>
      <div>
        <form onSubmit={props.handleContactFromSubmit}>
          <div>
            <input
            type="text"
            placeholder="first name"
            value={props.name}
            onChange={props.handleNameChange}
            />
          </div>
          <div>
            <input
            type="text"
            placeholder="last name"
            value={props.last_name}
            onChange={props.handleLastNameChange}
            />
          </div>
          <div>
            <input
            type="text"
            placeholder="phone number"
            value={props.phone_number}
            onChange={props.handlePhoneNumberChange}
            />
          </div>
          <div>
            <input
            type="text"
            placeholder="email"
            value={props.email}
            onChange={props.handleEmailChange}
            />
          </div>
          <div>
            <input
            type="text"
            placeholder="company"
            value={props.company}
            onChange={props.handleCompanyChange}
            />
          </div>
          <div>
            <input
            type="text"
            placeholder="position"
            value={props.position}
            onChange={props.handlePositionChange}
            />
          </div>
          <div>
            <input
            type="text"
            placeholder="department"
            value={props.department}
            onChange={props.handleDepartmentChange}
            />
          </div>
          <div>
            <input
            type="text"
            placeholder="last contact"
            value={props.last_contact}
            onChange={props.handleLastContactChange}
            />
          </div>
            <div>
              <input type="submit" className="button" value="Add" />
            </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
