// const { JSDOM } = require('jsdom')

export const newsorgsearchcall = async (input: string) => {

  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${input}&searchIn=title&language=en&ensortBy=publishedAt&pageSize=3&apiKey=bef248401f3848159f196f961915b756`,
    {
      method: 'GET',
    }
  )

  return res.json()
}
