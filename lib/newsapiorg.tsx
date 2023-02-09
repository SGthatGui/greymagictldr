const jsdom = require('jsdom')
const { JSDOM } = jsdom

export const newsorgsearchcall = async () => {
  // const searchlist = await fetch(
  //   'https://newsapi.org/v2/everything?q=apple&apiKey=bef248401f3848159f196f961915b756'
  // ).catch((err) => console.log(err))
  // console.log(searchlist)

  const res = await fetch(
    `https://newsapi.org/v2/everything?q=Apple&searchIn=title&language=en&ensortBy=publishedAt&pageSize=3&apiKey=bef248401f3848159f196f961915b756`,
    {
      method: 'GET',
    }
  )

  return res.json()
}

/* export const singlearticlescrap = async () => {
  const res = await fetch(
    'https://www.wired.com/story/apple-tests-touchscreen-macbooks/'
  ).catch((err) => console.log(err))
  const html = await res?.text()
  const dom = new JSDOM(html)
  const document = dom.window.document
  const dataselect = document.queryselector('<p>')?.textcontext
  console.log(dataselect)
} */
