import React from 'react'
import assetEnvUrl from '../libs/assetUrl'
import { Category, Tile } from '../utils/types'

interface HeaderPageProps { 
    data: Category<any>;
    mainName: string;
}

const HeaderPage = ({ data, mainName }: HeaderPageProps) => {
    return (
        <div className="container mx-auto mt-20">
            <div className="relative rounded-lg flex flex-col md:flex-row items-center shadow-xl md:h-72 mx-2">
                <div className="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
                    <div className="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-center"
                        style={{ backgroundImage: ` url(${assetEnvUrl}${data.mainImage} )`, backgroundBlendMode: 'multiply' }}>
                    </div>
{/*                     <div className="right-3 hidden md:block bottom-2 absolute z-1">
                        <span className="tracking-wider text-white bg-green-500 px-2 py-1 text-xs rounded leading-loose font-semibold mx-1" title="">
                            Updated to Openforge 2
                        </span>
                        <span className="tracking-wider text-white bg-green-500 px-2 py-1 text-xs rounded leading-loose font-semibold mx-1" title="">
                            Updated to Openforge 2
                        </span>
                        
                    </div> */}
                    <div className="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
                        <h3 className="w-full font-bold text-2xl uppercase text-white leading-tight mb-2">{mainName}</h3>
                        <h4 className="w-full text-xl text-gray-100 leading-tight">{data.name}</h4>
                    </div>
                    <svg className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>
                </div>

                <div className="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
                    <div className="grid md:grid-rows-3 gap-2 p-8 md:pr-12 md:pl-14 md:py-8 mx-2 md:mx-0 h-full w-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
                        <div>
                            <h1 className="hidden md:block font-bold text-3xl text-gray-700">{mainName}</h1>
                            <h2 className="hidden md:block text-2xl text-gray-400 mx-8">{data.name}</h2>
                        </div>
                        <p className="text-gray-600 text-justify">{data.description}</p>
                        <a className="w-40  h-11 text-center text-xl uppercase bg-purple-600 transform transition duration-400 hover:bg-purple-500 rounded text-white py-2 px-4 shadow" href={data.downloadLink}>
                            <span>Download</span>
                        </a>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default HeaderPage
