import React, { Component } from 'react'

export default class BlogScreen extends Component {
    render() {
        return (
            <>

                <div className='mt-10'>
                    <p className="text-center text-2xl font-[600]">Our Latest Posts</p>
                </div>

                <div className="flex flex-wrap mx-10 mt-5">

                    <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <img className="w-full h-32 object-cover object-center" src="/assets/images/Zudio.jpg" alt="zudio in rajouri garden, zudio rajouri garden, zudio franchise enquiry, zudio franchise cost, zudio franchise fees, zudio franchise eligibility, zudio franchise price, zudio franchise criteria, how to get zudio franchise, zudio franchies" />
                            <div className="px-4 py-2">
                                <h2 className="text-lg font-semibold text-gray-800"><a href="/zudio-franchise">Zudio Franchise Cost, Fee, Details and Review</a></h2>
                                <p className="text-sm text-gray-600 mt-1">Zudio, a brand under the Tata Group, offers affordable and stylish fashion for the whole family. Launched in 2016, it has quickly become a go-to destination for budget-conscious shoppers in India. With a wide range of clothing and accessories, Zudio provides trendy options without breaking the bank.</p>
                                
                                
                            </div>
                        </div>
                    </div>


                    <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <img className="w-full h-32 object-cover object-center" src="/assets/images/enamor.jpg" alt="enamor franchise, enamer franchise cost" />
                            <div className="px-4 py-2">
                                <h2 className="text-lg font-semibold text-gray-800"><a href="/enamor-franchise-cost-details-and-reviews">Enamor Franchise - Cost, Review, and Enquiry</a></h2>
                                <p className="text-sm text-gray-600 mt-1">Enamor is a prominent lingerie brand known for its quality and comfort. With a wide range of lingerie and intimate wear, Enamor caters to women of all shapes and sizes. Whether it's bras, panties, or activewear, Enamor offers stylish and supportive options for every occasion.</p>
                                
                                
                            </div>
                        </div>
                    </div>

                    
                    


                    


                    

                </div>





            </>
        )
    }
}
