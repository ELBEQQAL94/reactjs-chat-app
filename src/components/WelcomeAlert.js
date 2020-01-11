import React from 'react';

const WelcomeAlert = ({message: {user, text}}) => (
    <div className="welcome_alert">
        {text}
    </div>
);

export default WelcomeAlert;