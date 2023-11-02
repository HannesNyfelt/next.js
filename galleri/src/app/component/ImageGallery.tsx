import React, { useState } from 'react'

const images = [
    {
        name: 'Lion',
        role: 'Large Animal',
        imageUrl:
            '/img/Lion.jpg',
    },
    {
        name: 'Rhino',
        role: 'Large Animal',
        imageUrl:
            '/img/Rhino.jpg',
    },
    {
        name: 'Dog',
        role: 'Medium Animal',
        imageUrl:
            '/img/Dog.jpg',
    },
    {
        name: 'Cat',
        role: 'Medium Animal',
        imageUrl:
            '/img/Cat.jpg',
    },
    {
        name: 'Bee',
        role: 'Small Animal',
        imageUrl:
            '/img/Bees.jpg',
    },
    {
        name: 'Ant',
        role: 'Small Animal',
        imageUrl:
            '/img/Ant.jpg',
    },
]

const filterImages = (images: any, filter: any) => {
    if (filter == '') {
        return images
    }
    return images.filter((image: any) => image.role === filter)
}


function ImageGallery() {
    const [filter, setFilter] = useState('')
    const filteredImages = filterImages(images, filter)

    function filterLarge() {
        setFilter('Large Animal')
    }

    function filterMedium() {
        setFilter('Medium Animal')
    }

    function filterSmall() {
        setFilter('Small Animal')
    }

    return (
        <div>
            <div>
                <h3>Filter :</h3>
                <div>
                    <button onClick={filterLarge}>Large animals</button>
                    <button onClick={filterMedium}>Medium animals</button>
                    <button onClick={filterSmall}>Small animals</button>
                </div>
            </div>
            <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {filteredImages.map((image: any) => (
                    <li
                        key={image.name}
                        className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
                    >
                        <div className="flex items-center flex-1 flex-col p-8">
                            <img className="mx-auto h-48" src={image.imageUrl} alt="" />
                            <h3 className="mt-6 text-sm font-medium text-gray-900">{image.name}</h3>
                            <span className="w-20 justify-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                {image.role}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ImageGallery