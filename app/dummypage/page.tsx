'use client'

import React from 'react'
import { newsorgsearchcall } from '../../lib/newsapiorg'
import Newslist from '../../ui/newslist'

export default function Search() {
  const [data, setData] = React.useState('')

  const list = async () => {
    const asd = await newsorgsearchcall()
    const zxc = await setData('asd')
  }

  return (
    <div>
      <p>placeholder for the input</p>
      <button onClick={list}>yolo</button>
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
    </div>
  )
}
