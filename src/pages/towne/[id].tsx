import { GetStaticProps, GetStaticPaths } from 'next'
import React from 'react'
import TowneData from '../../data/towne/main.json'

interface TownePageProps {
    data: any;
}

const TownePage = ({ data }: TownePageProps) => {
    return (
        <div>
            <div className="container mx-auto">

                <div className="relative rounded-lg flex flex-col md:flex-row items-center shadow-xl md:h-72 mx-2">

                    <div className="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
                        <div className="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom"
                            style={{ backgroundImage: ` url( ${data.mainImage} )`, backgroundBlendMode: 'multiply' }}>

                        </div>
                        <div className="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
                            <h3 className="w-full font-bold text-2xl text-white leading-tight mb-2">TOWNE</h3>
                            <h4 className="w-full text-xl text-gray-100 leading-tight">{data.name}</h4>
                        </div>
                        <svg className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>
                    </div>

                    <div className="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
                        <div className="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full w-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
                            <h1 className="hidden md:block font-bold text-3xl text-gray-700">Towne</h1>
                            <h2 className="hidden md:block text-2xl text-gray-400 mx-4">{data.name}</h2>
                            <p className="text-gray-600 text-justify ">{data.description}</p>
                            <a className="flex items-baseline mt-3 text-blue-600 hover:text-blue-900 focus:text-blue-900" href={data.linkDownload}>
                                <span>Download</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            <div className="grid grid-cols-1 p-5 gap-4 md:grid-cols-4 container mx-auto my-5">

                {data.images.map((image: any) => {
                        return (
                            <div key={image.id} className="flex flex-col justify-center items-center max-w-sm  my-8">
                                <div style={{ backgroundImage: `url(${image.src})` }}
                                    className="w-80 bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"></div>
                                <div className="w-80 md:w-80 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
                                    <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">{image.name}</div>
                                    <div className="flex items-center justify-center py-2 px-3 bg-gray-200">
                                        <button className=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">Download</button>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </div>

        </div>
    )
}

export default TownePage


export const getStaticPaths: GetStaticPaths = async () => {
    const paths = TowneData.map((type:any) => ({
        params: { id: type.id.toString() },
    }))
    return { paths, fallback: false }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.id
    const item = TowneData.find((data: any) => data.id === id)

    return { props: { data: item } }
}