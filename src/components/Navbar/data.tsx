
const categories = [
    {
        id: 'dungeon',
        link: '/dungeon',
        text: 'Dungeon',
        isDropdown: true,
        subCategories: [
            {
                id: 'floor',
                link: '/dungeon/floor',
                text: 'Floor'
            },
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
                id: 'floor',
                link: '/towne/floor',
                text: 'Floor'
            },
            {
                id: 'wall',
                link: '/towne/wall',
                text: 'Wall'
            },
            {
                id: 'window',
                link: '/towne/window',
                text: 'Window'
            },
            {
                id: 'stairs',
                link: '/towne/stairs',
                text: 'Stairs'
            },
            {
                id: 'door',
                link: '/towne/door',
                text: 'Door'
            },
        ]
    },
    {
        id: 'cutStone',
        link: '/cut-stone',
        text: 'Cut Stone',
        isDropdown: false,
    },
    {
        id: 'facades',
        link: '/facades',
        text: 'Facades',
        isDropdown: false,
    },
    {
        id: 'sewers',
        link: '/sewers',
        text: 'Sewers',
        isDropdown: true,
        subCategories: [
            {
                id: 'floor',
                link: '/sewers/floor',
                text: 'Floor'
            },
            {
                id: 'wall',
                link: '/sewers/wall',
                text: 'Wall'
            },
        ]
    },
    {
        id: 'rough-stone',
        link: '/rough-stone',
        text: 'Rough Stone',
        isDropdown: false,
    },
    {
        id: 'other',
        link: '/other',
        text: 'Other',
        isDropdown: true,
        subCategories: [
            {
                id: 'accessories',
                link: '/other/accessories',
                text: 'Accessories'
            },
            {
                id: 'boats',
                link: '/other/boats',
                text: 'Boats'
            },
            {
                id: 'buildings',
                link: '/other/buildings',
                text: 'Buildings'
            },
            {
                id: 'miniatures',
                link: '/other/miniatures',
                text: 'Miniatures'
            },
            {
                id: 'places-of-power',
                link: '/other/places-of-power',
                text: 'Places of Power'
            },
            {
                id: 'scatter',
                link: '/other/scatter',
                text: 'Scatter'
            },
            {
                id: 'tools',
                link: '/other/tools',
                text: 'Tools'
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
export default categories;