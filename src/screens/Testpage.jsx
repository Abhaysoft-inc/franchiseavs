import React from 'react';

const locations = [
  {
    title: 'New Delhi',
    areas: [
      'Najafgarh Road Metro Station Line',
      'Rajouri Garden Market',
      'Near Pacific Mall, Subash Nagar',
      'Tagore Garden',
      'Dwarka, Good Property',
    ],
  },
  {
    title: 'South Delhi',
    areas: ['Malviya Nagar', 'Saket', 'Vasant Kunj'],
  },
  // Add more location objects for other regions
];

const PreferredLocations = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Preferred Franchise Locations by ZUDIO</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="bg-white p-6 rounded-md shadow-md hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-4">{location.title}</h3>
              <ul className="list-disc ml-6">
                {location.areas.map((area, index) => (
                  <li key={index} className="mb-2">{area}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreferredLocations;
