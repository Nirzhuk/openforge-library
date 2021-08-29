import React, { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import useOutsideClick from '../hooks/useClickOutside'



const categories = [
    {
        id: 'dungeon',
        link: '/dungeon',
        text: 'Dungeon',
        isDropdown: true,
        subCategories: [
            {
                id: 'wall',
                link: '/dungeon/wall',
                text: 'Wall'
            },
            {
                id: 'door',
                link: '/dungeon/door',
                text: 'Door'
            },
        ]
    },
    {
        id: 'towne',
        link: '/towne',
        text: 'Towne',
        isDropdown: true,
        subCategories: [
            {
                id: 'wall',
                link: '/towne/wall',
                text: 'Wall'
            },
            {
                id: 'door',
                link: '/towne/door',
                text: 'Door'
            },
        ]
    },
    {
        id: 'community',
        link: '/community',
        text: 'Community 🎉',
        isDropdown: false
    }

]

const CustomLink = ({category}:any) => {
    const router = useRouter()
    const ref = useRef(null)
    const [openDrowndown, setOpenDrowdown] = useState(false)
    const onClose = () => setOpenDrowdown(false);
    useOutsideClick(ref,onClose)
    if (category.isDropdown) {
        return (
            <div className="relative">
                <button onClick={() => setOpenDrowdown(!openDrowndown)} className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                    <span>{category.text}</span>
                    <svg fill="currentColor" viewBox="0 0 20 20" className={` ${openDrowndown ? 'rotate-180' : 'rotate-0'} inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1`}><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
                {openDrowndown && (
                    <div ref={ref} className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 z-10">
                        <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
                            {category.subCategories.map((subCategory:any) => (
                                <Link href={subCategory.link} key={subCategory.id}>
                                    <a className="block px-4 py-2 mt-2 text-sm font-semibold mb-1 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">
                                        {subCategory.text}
                                        </a>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div >
        )
    }
    return (
        <Link key={category.id} href={category.link}>
            <a key={category.id} className={`${router.asPath.includes(category.link) ? ' bg-gray-200' : ''} px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline`}>{category.text}</a>
        </Link>
    )

}


const Navbar = () => {
    const [open, setOpen] = useState(false)
    
    return (

        <header className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
            <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                <div className="p-4 flex flex-row items-center justify-between">
                    <Link href="/">
                        <a className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">Openforge Library</a>
                    </Link>
                    <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline" onClick={() => setOpen(!open)}>
                        <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                            {open && <path x-show="!open" fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>}
                            {!open && <path x-show="open" fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>}
                        </svg>
                    </button>
                </div>
                <nav className={`${open ? 'flex' : 'hidden'} flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}>
                    {categories.map(category => (
                        <CustomLink key={category.id} category={category} />
                    ))}
                </nav >
            </div >
        </header >
    )
}
export default Navbar