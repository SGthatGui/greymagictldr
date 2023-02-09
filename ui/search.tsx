'use client'

import React from 'react'
import { getsinglearticle } from '../lib/scrape'

export default function Search() {
  const [data, setData] = React.useState('')

  const list = async () => {
    const asd = await getsinglearticle('apple')
    await setData(asd)
  }

  return (
    <main>
      <p>placeholder for the input</p>
      <button onClick={list}>yolo</button>
      {data ? <p>data</p> : ''}
    </main>
  )
}
