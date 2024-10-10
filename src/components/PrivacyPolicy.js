import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          Gaëtan S. built the Fou d'Ball app as a Free app. This SERVICE is provided by Gaëtan S. at no cost and is intended for use as is.
        </p>
        <p className="mb-4">
          This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service.
        </p>
        <p className="mb-4">
          If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Information Collection and Use</h2>
        <p className="mb-4">
          For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information, including but not limited to email, name. The information that I request will be retained on your device and is not collected by me in any way.
        </p>
        <p className="mb-4">
          The app does use third party services that may collect information used to identify you.
        </p>
        <p className="mb-4">
          Link to privacy policy of third party service providers used by the app:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><a href="https://www.google.com/policies/privacy/" className="text-blue-600 hover:underline">Google Play Services</a></li>
          <li><a href="https://firebase.google.com/policies/analytics" className="text-blue-600 hover:underline">Google Analytics for Firebase</a></li>
          <li><a href="https://firebase.google.com/support/privacy/" className="text-blue-600 hover:underline">Firebase Crashlytics</a></li>
        </ul>
        {/* Ajoutez le reste du contenu de la politique de confidentialité ici */}
        <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at hapeaty@proton.me.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;