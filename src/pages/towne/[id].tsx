import { GetStaticProps, GetStaticPaths } from 'next'
import React from 'react'
import Card from '../../components/Card'
import HeaderPage from '../../components/HeaderPage'
import TowneData from '../../data/towne/main'
import { Category, Tile } from '../../utils/types'

interface TownePageProps {
    data: Category<Tile>;
}

const TownePage = ({ data }: TownePageProps) => {
    return (
        <div className="h-full">
            <HeaderPage data={data} mainName={'Towne'} />
            <div className="grid grid-cols-1 p-5 gap-4 md:grid-cols-4 container mx-auto my-5">

                {data.items.map((item: Tile) => {
                    return (
                        <Card key={item.id} item={item} />
                    )
                })}
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