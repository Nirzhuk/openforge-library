import { GetStaticProps, GetStaticPaths } from 'next'
import React from 'react'
import HeaderPage from '../../components/HeaderPage'
import TowneData from '../../data/dungeon/main.json'

interface TownePageProps {
    data: any;
}

const TownePage = ({ data }: TownePageProps) => {
    return (
        <div>
            <HeaderPage data={data} mainName={'Dungeon'} />
            <div className="grid grid-cols-1 p-5 gap-4 md:grid-cols-4 container mx-auto my-5">

                {data.images.map((image: any) => {
                    return (
                        <div key={image.id} className="flex flex-col justify-center items-center max-w-sm  my-8">
                            <div style={{ backgroundImage: `url(/openforge-library/${image.src})` }}
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
    const paths = TowneData.map((type: any) => ({
        params: { id: type.id.toString() },
    }))
    return { paths, fallback: false }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.id
    const item = TowneData.find((data: any) => data.id === id)

    return { props: { data: item } }
}