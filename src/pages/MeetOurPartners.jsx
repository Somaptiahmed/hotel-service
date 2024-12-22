import React from 'react';

const partners = [
  {
    name: "Partner 1",
    logo: "https://i.ibb.co.com/rvzFcKq/11c.webp", 
    description: "You will get any information about hotel room reservation.",
    meetLink: "https://meet.google.com/fake-meet-123", // Fake Google Meet link
  },
  {
    name: "Partner 2",
    logo: "https://i.ibb.co.com/VJ2s7k6/11B.png", 
    description: "You will get information about root service.",
    meetLink: "https://meet.google.com/fake-meet-456", // Fake Google Meet link
  },
  {
    name: "Partner 3",
    logo: "https://i.ibb.co.com/LrDFnFr/11A.png", // Replace with actual logo URL
    description: "Except these if you need any information feel comfortable to ask me.",
    meetLink: "https://meet.google.com/fake-meet-789", // Fake Google Meet link
  },
];

const MeetOurPartners = () => {
  return (
    <div className="container mx-auto py-10 w-8/12">
      <h2 className="text-4xl font-bold text-center text-blue-950 mb-6">
        Meet Our Partners
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
        We are proud to collaborate with industry-leading partners to bring the best solutions to our customers.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {partners.map((partner, index) => (
          <div key={index} className="border rounded-lg shadow-md p-6 bg-white">
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-950 mb-2">
              {partner.name}
            </h3>
            <p className="text-gray-600 mb-4">{partner.description}</p>
            <a
              href={partner.meetLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-500 hover:text-blue-700"
            >
              Join Meeting
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurPartners;
