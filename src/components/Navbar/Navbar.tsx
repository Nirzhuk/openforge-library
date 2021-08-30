import React, { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import useOutsideClick from '../../hooks/useClickOutside';
import categories from './data'


interface Subcategory {
    id: string,
    link: string,
    text: string
}

interface CategoryLink {
    id: string,
    link: string,
    text: string,
    isDropdown: boolean,
    subCategories?: Subcategory[]
}
interface CustomLinkProps {
    category: CategoryLink,
}

const CustomLink = ({ category }: CustomLinkProps) => {
    const router = useRouter()
    const ref = useRef(null)
    const [openDrowndown, setOpenDrowdown] = useState(false)
    const onClose = () => setOpenDrowdown(false);
    useOutsideClick(ref, onClose)
    if (category.isDropdown) {
        return (
            <div className="relative">
                <button onClick={() => setOpenDrowdown(!openDrowndown)} className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                    <span>{category.text}</span>
                    <svg fill="currentColor" viewBox="0 0 20 20" className={` ${openDrowndown ? 'rotate-180' : 'rotate-0'} inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1`}><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
                {openDrowndown && (
                    <div ref={ref} className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 z-20">
                        <div className="px-2 py-2 border border-gray-500 bg-white rounded-md shadow dark-mode:bg-gray-800  z-20">
                            {category.subCategories && category.subCategories.map((subCategory: Subcategory) => (
                                <Link href={subCategory.link} key={subCategory.id}>
                                    <a className="block px-4 py-2 mt-2 text-sm font-semibold mb-1 bg-transparent rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">
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
            <a key={category.id} className={`${router.asPath.includes(category.link) ? ' bg-gray-200' : ''} px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline`}>{category.text}</a>
        </Link>
    )

}


const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (

        <header className="relative w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
            <div className="flex flex-col max-w-screen-2xl mx-auto md:items-center md:justify-between md:flex-row">
                <div className="p-4 flex flex-row items-center justify-between">
                    <Link href="/">
                        <a className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">Openforge Library</a>
                    </Link>
                    <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline" onClick={() => setOpen(!open)}>
                        <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                            {!open && <path x-show="!open" fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>}
                            {open && <path x-show="open" fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>}
                        </svg>
                    </button>
                </div>
                <nav className={`${open ? 'flex' : 'hidden'} flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}>
                    {categories.map((category:CategoryLink) => (
                        <CustomLink key={category.id} category={category} />
                    ))}
                </nav >
            </div >
            <div className="hidden md:block absolute right-2 top-3 2xl:right-20">
                <Link passHref href="https://github.com/Nirzhuk/openforge-library">
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-current text-grey-900 hover:text-grey-700 cursor-pointer" height="32px" width="32px" viewBox="0 0 17 16" fill="none" ><g clipPath="url(githublogo)" ><path fill="currentColor" fillRule="evenodd" d="M8.18391.249268C3.82241.249268.253906 3.81777.253906 8.17927c0 3.46933 2.279874 6.44313 5.451874 7.53353.3965.0991.49563-.1983.49563-.3965v-1.3878c-2.18075.4956-2.67638-.9912-2.67638-.9912-.3965-.8922-.89212-1.1895-.89212-1.1895-.69388-.4957.09912-.4957.09912-.4957.793.0992 1.1895.793 1.1895.793.69388 1.2887 1.88338.8922 2.27988.6939.09912-.4956.29737-.8921.49562-1.0904-1.78425-.1982-3.5685-.8921-3.5685-3.96496 0-.89212.29738-1.586.793-2.08162-.09912-.19825-.3965-.99125.09913-2.08163 0 0 .69387-.19825 2.18075.793.59475-.19825 1.28862-.29737 1.9825-.29737.69387 0 1.38775.09912 1.98249.29737 1.4869-.99125 2.1808-.793 2.1808-.793.3965 1.09038.1982 1.88338.0991 2.08163.4956.59475.793 1.28862.793 2.08162 0 3.07286-1.8834 3.66766-3.66764 3.86586.29737.3965.59474.8921.59474 1.586v2.1808c0 .1982.0991.4956.5948.3965 3.172-1.0904 5.4518-4.0642 5.4518-7.53353-.0991-4.3615-3.6676-7.930002-8.02909-7.930002z" clipRule="evenodd" className="jsx-120409797"></path></g><defs className="jsx-120409797"><clipPath id="githublogo" className="jsx-120409797"><path fill="transparent" d="M0 0h15.86v15.86H0z" transform="translate(.253906 .0493164)" className="jsx-120409797"></path></clipPath></defs></svg>
                </Link>
            </div>
        </header >
    )
}
export default Navbar
