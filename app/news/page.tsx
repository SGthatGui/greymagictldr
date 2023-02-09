'use client'

import { newsorgsearchcall } from '@/lib/newsapiorg'
import { useState } from 'react'
import styles from './page.module.css'

const Page = () => {
  const [data, setData] = useState([])
  const [input, setIput] = useState('')

  const getData = async () => {
    const data = await newsorgsearchcall(input)
    setData(data?.articles)
    // console.log(data.articles);
  }

  return (
    <div className={styles.newspage}>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Search your news articles'
          aria-label="Recipient's username"
          aria-describedby='basic-addon2'
          onChange={(e: any) => setIput(e.target.value)}
        />
        <div className='input-group-append mb-4 '>
          <button className='btn btn-primary' type='button' onClick={getData}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-search'
              viewBox='0 0 16 16'>
              <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
            </svg>
          </button>
        </div>
      </div>
      <div className='d-flex'>
        {data &&
          data.map((article: any) => (
            <div className={styles.newspagecard} key={article.url}>
              <div
                className={`${styles.imgcard}`}
                style={{
                  backgroundImage: `url(${article.urlToImage})`,
                }}></div>
              <h3 className='mb-3'>
                <a href={article.url}>{article.title}</a>
              </h3>
              <p>{article.description}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Page
