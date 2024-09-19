'use client'
import React, { useState } from 'react'

const HiddenContent = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="hidden-content">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        {isVisible ? '隐藏答案' : '显示答案'}
      </button>
      {isVisible && (
        <div className="mt-4 rounded border border-gray-200 p-4" style={{ background: '#fdfdfd' }}>
          {children}
        </div>
      )}
    </div>
  )
}

export default HiddenContent
