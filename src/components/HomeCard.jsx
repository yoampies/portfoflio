import React from 'react'
import { Link } from 'react-router-dom'

function HomeCard({title, imgURL, id}) {
  return (
    <div className="project-card rounded-2xl pattern-1 scale-100 group hover:shadow-xl hover:scale-[1.02]">
        <Link to={`/projects/${id}`}>
            <img alt="Project 1" className="rounded-t-2xl w-full h-40 object-cover" src={imgURL}/>
            <div className="p-4">
            <h3 className="text-lg font-bold text-center truncate">{title}</h3>
            </div>
        </Link>
    </div>
  )
}

export default HomeCard