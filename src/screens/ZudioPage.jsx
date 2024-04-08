
import { useEffect } from 'react';


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





function ZudioPage() {
  useEffect(() => {
    document.title = "ZUDIO Franchise Cost - Details, Reviews, Requirements";
    return () => {
      // Optionally, you can reset the title when the component unmounts
      document.title = "Bharat Franchise - Explore Brand Franchises across the India";
    };
  }, []);

    return (
        <>


<div className='flex mx-10 my-10  lg:mx-32'>

<h1 className=" text-[20px] lg:py-10 font-[600] lg:text-[32px]">ZUDIO Franchise Cost - Open your own ZUDIO store</h1>

</div>

<div className='flex justify-center lg:mx-32 lg:space-x-10'>

<div className="hidden lg:block random lg:w-3/5 h-[230px]">
  <div className="container1">
    <p className='text-white lg:text-[32px] font-[600]'>Launch your own ZUDIO store with ease!</p>
    <p className="text-yellow-600 font-[600] lg:text-[22px]">Contact us now for more information!</p>

  </div>



</div>

<div className=" logobox lg:w-1/3 lg:h-[230px]">

  {/* <img src="src\assets\images\Zudio.jpg" className='h-[230px] w-[400px]' alt="" /> */}

  <div className="bbtn">
    <p className='text-white bg-yellow-500 mt-[168px] p-4 text-center text-[20px] font-[600]'><a href='https://wa.link/cugbva'>Apply For Franchise</a></p>

  </div>

</div>

</div>


<div className="mx-5 blog lg:mx-32 mt-20">

<h2 className='text-xl lg:text-3xl font-bold mb-6 '>ZUDIO Franchise Details</h2>

<div className="  lg:flex lg:space-x-4 ">

  <p className='mt-5 lg:w-2/3 '>The ZUDIO Franchise offers a promising opportunity for aspiring entrepreneurs seeking to venture into the retail sector. With a focus on trendy apparel and accessories, ZUDIO provides a diverse product line that appeals to a wide range of customers. The franchise package includes comprehensive support in areas such as site selection, store setup, inventory management, and marketing strategies. 
    <br />
    <br />

    Backed by a reputable brand and a proven business model, ZUDIO franchisees benefit from established systems and guidance to help ensure their success. By embracing innovation and staying ahead of fashion trends, ZUDIO franchises have the potential to thrive in the competitive retail landscape, offering both financial rewards and the satisfaction of owning a flourishing business.</p>

  <img src="assets/images/1692614112130.png" className='mt-10 lg:mt-0 lg:w-1/3 h-60 ' alt="" />

</div>

<h2 className='mt-10 text-xl lg:text-3xl font-bold mb-6'>ZUDIO Franchise Requirements</h2>


<div className='lg:flex lg:space-x-10'>
  <div className="overflow-x-auto mt-10 lg:w-4/5 border-black ">
  <table className="table-auto min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Requirement</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">Investment</td>
        <td className="px-6 py-4 whitespace-nowrap">INR 10 - 20 Lakhs</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">Space Required</td>
        <td className="px-6 py-4 whitespace-nowrap">500 - 1000 sq ft</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">Franchise Fee</td>
        <td className="px-6 py-4 whitespace-nowrap">INR 5 Lakhs</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">Royalty Fee</td>
        <td className="px-6 py-4 whitespace-nowrap">5% of monthly sales</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">Initial Training</td>
        <td className="px-6 py-4 whitespace-nowrap">Provided</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">Marketing Support</td>
        <td className="px-6 py-4 whitespace-nowrap">Available</td>
      </tr>
      {/* Add more rows for other requirements */}
    </tbody>
  </table>


</div>

<div className="hidden lg:block enquiry w-2/5 border-black border  mt-10 h-auto">

<p className='text-center mt-10 text-2xl'>Interested In ZUDIO?</p>
<p className='text-center mt-1 text-lg'>Enquire Now! </p>
<form action="" className='text-center mt-6 space-y-3'>
  <input type="text" name="" id="" placeholder='Name' className='border-black border p-2' />
  <input type="email" name="" placeholder='Email' id="" className='border-black border p-2' />
  {/* <input type="tel" name="" placeholder='Mobile' id="" className='border-black border p-2' /> */}
  <input type="text" name="" id="" placeholder='Message' className='border-black border p-2' /><br />
  <input type="submit" value="Request Info" className='bg-yellow-500 py-4 px-14 text-white font-[600]' />

</form>
</div>

</div>



<section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-xl lg:text-3xl font-bold mb-6 underline">Preferred Franchise Locations by ZUDIO</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div key={index} className=" p-6 rounded-md shadow-md hover:shadow-lg bg-yellow-200">
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



{/* <div className="container mx-auto py-12">
  <h2 className="text-3xl font-bold mb-6 underline">Preffered Franchise Locations by ZUDIO</h2>
  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <li className="bg-white rounded-lg shadow-md p-4">
      New Delhi Najafgarh Road Metro Station Line
    </li>
    <li className="bg-white rounded-lg shadow-md p-4">
      Rajouri Garden Market
    </li>
    <li className="bg-white rounded-lg shadow-md p-4">
      Near Pacific Mall Subash Nagar
    </li>
    <li className="bg-white rounded-lg shadow-md p-4">
      Tagore Garden
    </li>
    <li className="bg-white rounded-lg shadow-md p-4">
      Dwarka Good Property
    </li>
    <li className="bg-white rounded-lg shadow-md p-4">
      South Delhi Malviya Nagar
    </li>
    <li className="bg-white rounded-lg shadow-md p-4">
      Saket
    </li>
    <li className="bg-white rounded-lg shadow-md p-4">
      Vasant Kunj
    </li>
    <li className="bg-white rounded-lg shadow-md p-4">
      Sarojni Nagar nearby locations
    </li>
    <li className="bg-white rounded-lg shadow-md p-4">
      Pusa road connecting line
    </li>
    <li className="bg-white rounded-lg shadow-md p-4">
      Pusa road near area
    </li>
    <li className="bg-white rounded-lg shadow-md p-4">
      Shakti Nagar
    </li>
    <li className="bg-white rounded-lg shadow-md p-4">
      Delhi university area
    </li>
    <li className="bg-white rounded-lg shadow-md p-4">
      Civil lines
    </li>
    <li className="bg-white rounded-lg shadow-md p-4">
      Model town near by locations
    </li>
    <li className="bg-white rounded-lg shadow-md p-4">
      Dwarka plot BTS
    </li>
    <li className="bg-white rounded-lg shadow-md p-4">
      Dashrath Puri
    </li>
    <li className="bg-white rounded-lg shadow-md p-4">
      Maharani Bagh to Ashram road
    </li>
    <li className="bg-white rounded-lg shadow-md p-4">
      Safdarjung Near By area
    </li>
    <li className="bg-white rounded-lg shadow-md p-4">
      Kalesh Colony
    </li>
    <li className="bg-white rounded-lg shadow-md p-4">
      Lajpat Nagar to Okhla
    </li>
    <li className="bg-white rounded-lg shadow-md p-4">
      Near Kalkaji Temple
    </li>
    <li className="bg-white rounded-lg shadow-md p-4">
      Mathura Road Violet line Metro Area
    </li>
    <li className="bg-white rounded-lg shadow-md p-4">
      Preet Vihar
    </li>
    <li className="bg-white rounded-lg shadow-md p-4">
      Nirman Vihar Metro Connecting Line
    </li>
    <li className="bg-white rounded-lg shadow-md p-4">
      Mundka to Peeragarhi metro line
    </li>
    <li className="bg-white rounded-lg shadow-md p-4">
      Rohini
    </li>
    <li className="bg-white rounded-lg shadow-md p-4">
      Rithala
    </li>
    <li className="bg-white rounded-lg shadow-md p-4">
      Tikri Border
    </li>
    <li className="bg-white rounded-lg shadow-md p-4">
      Delhi Ncr all Metro Lines property’s
    </li>
  </ul>
</div> */}


<div className="container mx-auto py-12">
  <h2 className="text-xl lg:text-3xl font-bold mb-6 underline">Type of Market Required</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-4">Priority wise:</h3>
      <ul className="list-disc pl-6">
        <li>High Street</li>
        <li>Malls</li>
        <li>In Residential Commercial Property</li>
        <li>BTS Land Build to Suit Property</li>
      </ul>
    </div>

    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-4">Points noted:</h3>
      <ul className="list-disc pl-6">
        <li>Catchment video</li>
        <li>Property photo inside and outside</li>
        <li>Outside left side view photo</li>
        <li>Outside right side view photo</li>
        <li>360° Video for Property</li>
        <li>Floor Plans</li>
        <li>Auto Cad Drawing</li>
        <li>Google Location</li>
        <li>Full Address</li>
        <li>Photo for catchment near brands store sizes approx.</li>
        <li>Business revenue monthly they do on average</li>
      </ul>
    </div>
  </div>


  <div className="mt-8">
    <h3 className="text-xl font-bold mb-4">Near Brands for Catchment:</h3>
    <ul className="list-disc pl-6">
      <li>Max Fashion</li>
      <li>Reliance Trends</li>
      <li>V Mart</li>
      <li>Vishal Mega Mart</li>
      <li>Croma</li>
      <li>Tanishq</li>
      <li>Planet Fashion</li>
    </ul>
  </div>


</div>







</div>

<div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-12 text-white text-center">
<h2 className="text-3xl font-bold mb-6">For inquiries and more, contact us at:</h2>
<p className="text-xl"><a href='https://wa.link/cugbva'>+91 92054 34226</a></p>
</div>
        
        
        </>
      
    )
  
}

export default ZudioPage;
