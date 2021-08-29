import React from 'react'
import assetEnvUrl from '../libs/assetUrl'

const Card = ({ image }: any) => {
    return (
        <div key={image.id} className="flex flex-col justify-center items-center max-w-sm  my-8 relative">
            <div style={{ backgroundImage: `url(${assetEnvUrl}${image.src})` }}
                className="w-80 bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"></div>

            <div className="w-80 md:w-80 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
                <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">{image.name}</div>
                <div className="flex items-center justify-center py-2 px-3 bg-gray-200">
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
