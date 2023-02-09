'use client'

import React from 'react'
import { getsinglearticle } from '../lib/scrape'
import Newslist from './newslist'

export default function Search() {
  const [data, setData] = React.useState('')

  const list = async () => {
    const asd = await getsinglearticle('apple')
    const zxc = await setData(asd)
  }

  return (
    <main>
      <p>placeholder for the input</p>
      <button className='btn btn-primary' onClick={list}>
        yolo
      </button>
      {data ? (
        <>
          <div>
            <p>{data}</p>
          </div>
          <div>
            <Newslist />
          </div>
        </>
      ) : (
        ''
      )}
    </main>
  )
}
