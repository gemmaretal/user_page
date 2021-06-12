import React from 'react';
import IconPerson from '../Components/Images/Icon_person.png';
import IconContact from '../Components/Images/Iconcontacts.png';
import IconEmail from '../Components/Images/email.png';
import IconFlag from '../Components/Images/flag.png';
//components for Users List
export default function Users({ users }) {
  return (
    <div>
      {users.map((valueData, index) => (
        <div key={index} className="UserList">
          <img
            className="ProfilePicture"
            src={valueData.picture.large}
            alt={valueData.name.first + 'Profile Picture'}
          />
          <div className={'Detail'}>
            <div className="">
              <img src={IconPerson} alt="icon" className="icon1" />
              Name : {valueData.name.first} {valueData.name.last}
            </div>
            <div className="">
              <img src={IconContact} alt="icon" className="icon2" />
              Telephone : {valueData.phone}
            </div>
            <div className="">
              <img src={IconEmail} alt="icon" className="icon2" /> E-mail :{' '}
              {valueData.email}
            </div>
            <div className="">
              <img src={IconFlag} alt="icon" className="icon2" />
              Country : {valueData.location.country}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
