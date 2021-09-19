
import React from 'react';

const InfoWindowComponent = ({user, ...props}) => {
    return (
                <div>
                  <p><strong>Name:</strong> {user?.firstName} {user?.LastName}</p>
                  <p><strong>Email: </strong>{user?.email}</p>
                  <p><strong>Address: </strong>{user?.address}</p>
                </div>
    );
};

export default InfoWindowComponent;