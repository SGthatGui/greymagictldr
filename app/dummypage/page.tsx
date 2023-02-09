'use client'

import React from 'react'
import { newsorgsearchcall, singlearticlescrap } from '../../lib/newsapiorg'

export default function Search() {
  const [data, setData] = React.useState([])

  const list = async () => {
    const data = await newsorgsearchcall()
    setData(data.articles)
    console.log(data.articles)
    await singlearticlescrap()
  }

  return (
    <div>
      <p>placeholder for the input</p>
      <button onClick={list}>yolo</button>
      {data &&
        data.map((article: any) => {
          return (
            <>
              <div>
                <p>{article.url}</p>
              </div>
            </>
          )
        })}
    </div>
  )
}
