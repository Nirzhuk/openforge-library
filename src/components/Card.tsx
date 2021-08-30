import React from 'react'
import assetEnvUrl from '../libs/assetUrl'
import GalleryCarousel from './GalleryCarousel'

const Card = ({ item }: any) => {
    console.log(item)
    return (
        <div key={item.id} className="flex flex-col justify-center items-center max-w-sm  my-8 relative">

            {item?.isCarousel? (
                <GalleryCarousel slides={item.images} />)
                : (
                    <div style={{ backgroundImage: `url(${assetEnvUrl}${item.mainImage})` }}
                        className="w-80 bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"></div>
                )}
            <div className="w-80 md:w-80 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden z-10">
                <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">{item.name}</div>
                <div className="flex items-center justify-center py-2 px-3 bg-blue-100">
                    <button className=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">Download</button>
                </div>
            </div>
            {/* tags still not implemented            
 <div className="absolute left-0 top-2">
                <span className="m-4 tracking-wider text-white bg-green-500 px-2 py-1 text-xs rounded font-semibold" title="">
                    CC-YO
                </span>
                </div> */}
        </div>
    )
}

export default Card
