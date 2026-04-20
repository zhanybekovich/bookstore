'use client'
import { useState } from 'react'

interface Props {
  description: string
}

export function ProductDescription({ description }: Props) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div>
      <p className={`text-sm leading-6 ${expanded ? '' : 'line-clamp-3'}`}>{description}</p>

      <button onClick={() => setExpanded((prev) => !prev)} className="text-indigo-600 mt-1">
        {expanded ? 'Show less' : 'Read more...'}
      </button>
    </div>
  )
}
