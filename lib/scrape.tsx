export const getsinglearticle = async (id: string) => {
  const ting = id
  const singleitem = await fetch(
    'https://newsapi.org/docs/guides/how-to-get-the-full-content-for-a-news-article'
  )
    .then((response) => response.text())
    .then((html) => {
      // do something with the HTML content
      return html
    })
    .catch((error) => {
      console.error('Fetch error:', error)
    })

  const seconditem = await fetch(
    'https://newsapi.org/docs/guides/how-to-get-the-full-content-for-a-news-article'
  ).catch((err) => console.log(err))

  console.log(ting)
  return ting
}
