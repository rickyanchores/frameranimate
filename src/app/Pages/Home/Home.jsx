'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Card from '@/app/Components/Card/Card'

const Home = () => {
  return (
    <div className="Home w-screen min-h-screen grid justify-center items-center" id="/">

    <h1>next.js with framer animations</h1>
    <Card />
    </div>
  )
}

export default Home