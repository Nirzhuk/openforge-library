import { GetStaticProps, GetStaticPaths } from 'next'
import React from 'react'
import Card from '../../components/Card'
import HeaderPage from '../../components/HeaderPage'
import DungeonData from '../../data/dungeon/main.json'

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
                        <Card key={image.id} image={image}/>
                    )
                })
                }
            </div>
        </div>
    )
}

export default TownePage


export const getStaticPaths: GetStaticPaths = async () => {
    const paths = DungeonData.map((type: any) => ({
        params: { id: type.id.toString() },
    }))
    return { paths, fallback: false }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.id
    const item = DungeonData.find((data: any) => data.id === id)

    return { props: { data: item } }
}