import ImageCard from '@/app/Components/ImageCard/ImageCard';
import React from 'react'

const Gallery = () => {
  return (
    <div className='Gallery w-screen min-h-screen grid justify-center items-center bg-gray-700 text-white text-4xl'>
        <h1>Gallery</h1>
        <div className="gallery-container grid grid-cols-2 gap-4">
            <ImageCard />
            <ImageCard />
        </div>
    </div>
  )
}

export default Gallery;