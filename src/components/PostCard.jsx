import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="block group">
      <div className='w-full bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-black hover:shadow-lg transition-all duration-300'>
        {/* Image */}
        <div className='w-full aspect-video overflow-hidden bg-gray-100'>
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
          />
        </div>
        {/* Content */}
        <div className='p-4'>
          <h2 className='text-base font-semibold text-gray-900 leading-snug group-hover:underline line-clamp-2'>
            {title}
          </h2>
          <div className='mt-3 flex items-center'>
            <span className='text-xs text-gray-500 group-hover:text-black transition-colors duration-200 font-medium'>
              Read article →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PostCard
