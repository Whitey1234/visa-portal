'use client'
import React from 'react'

export default function loading() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen space-y-4">
  <span className="loading loading-bars loading-lg text-blue-600"></span>
  <p className="text-gray-600 text-sm font-medium">Loading, please wait...</p>
</div>
  )
}
