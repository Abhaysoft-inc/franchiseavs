
import './App.css'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div className='flex mx-32'>

        <h1 className="py-10 font-[600] text-[32px]">ZUDIO Franchise Cost - Open your own ZUDIO store</h1>

      </div>

      <div className='flex mx-32 space-x-10'>

        <div className="random w-3/5 h-[230px]">
          <div className="container1">
            <p className='text-white text-[32px] font-[600]'>Launch your own ZUDIO store with ease!</p>
            <p className="text-yellow-600 font-[600] text-[22px]">Contact us now for more information!</p>

          </div>



        </div>

        <div className="logobox w-1/3 h-[230px]">

          {/* <img src="src\assets\images\Zudio.jpg" className='h-[230px] w-[400px]' alt="" /> */}

          <div className="bbtn">
            <p className='text-white bg-yellow-500 mt-[168px] p-4 text-center text-[20px] font-[600]'>Apply For Franchise</p>

          </div>

        </div>

      </div>

      <div className="blog mx-32 mt-20">

        <p className='text-3xl font-bold mb-6 underline'>ZUDIO Franchise Details</p>

        <div className="flex space-x-4">

          <p className='mt-5 w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aperiam obcaecati sit, voluptate unde laborum iusto nulla. Iure pariatur itaque a vel assumenda, quas commodi maiores nobis, sapiente praesentium repudiandae quaerat molestias voluptas unde ut atque saepe.
            <br />
            <br />

            Voluptatibus, officia officiis quam ratione a ad eligendi minus accusantium, natus, neque tenetur quod sapiente quaerat ipsa fugiat voluptates nostrum ex consectetur rerum facere? Adipisci magni consectetur ullam quos sint totam delectus veniam architecto explicabo, reprehenderit quae! Recusandae quaerat aut consequuntur corporis quae excepturi cumque mollitia veritatis nostrum necessitatibus </p>

          <img src="src\assets\images\1692614112130.png" className='w-1/3 h-60' alt="" />

        </div>

        <p className='mt-10 text-3xl font-bold mb-6 underline'>ZUDIO Franchise Requirements</p>

        <div className="overflow-x-auto mt-10">
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




        <div className="container mx-auto py-12">
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
        </div>


        <div className="container mx-auto py-12">
          <h2 className="text-3xl font-bold mb-6 underline">Type of Market Required</h2>
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
  <p className="text-xl">+91 92054 34226</p>
</div>



    </>
  )
}

export default App
