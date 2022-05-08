import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-center text-primary'>Q-1: Difference between authorization and authentication?</h1>
            <h3>Authentication:</h3>
            <p>Authentication verifies who the user is.Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.Authentication is the first step of a good identity and access management process.Authentication is visible to and partially changeable by the user.</p>
            <h3>Authorization:</h3>
            <p>Authorization determines what resources a user can access.Authorization works through settings that are implemented and maintained by the organization.Authorization always takes place after authentication.Authorization isn’t visible to or changeable by the user.</p>

            <h1 className='text-center text-primary'>Q-2: Why are you using firebase? What other options do you have to implement authentication?</h1>
            <p>Firebase is a toolkit and infrastructure that aims at supporting the process of building better applications and growing a successful business. This technique continues to innovate and dominate the BaaS (Backend as a Service) market. Along with the time, it has grown so much that it has become a key component of Google’s mobile strategy. It was bought by Google and now it is being constantly improved in order to make the user experience much more convenient and productive. According to Firebase console, the application SDKs provided by this toolkit, directly interact with backend services.Therefore, there is no need to establish any connection between the app and the service.So, if you operate one of the Firebase database options, you typically write code to query the database in the app.This is distinct from traditional app development.The traditional app development process requires writing both frontend and backend software.The frontend code just implements the API endpoints exposed by the backend, and the backend code actually does the work.However, with Firebase products, traditional backend development is bypassed, putting the work into the client</p>
            <h1 className='text-primary'>Q-3: What other services does firebase provide other than authentication?</h1>
            <p>1. Cloud Firestore <br />
2. Analytics <br />
3. Hosting Options <br />
4. Firebase Pricing</p>
        </div>
    );
};

export default Blog;