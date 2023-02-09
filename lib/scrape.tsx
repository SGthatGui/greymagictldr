export const getsinglearticle = async (id: string) => {
  const ting = id
  const singleitem = await fetch('https://en.wikipedia.org/wiki/Apple')
    .then((response) => response.text())
    .then((html) => {
      // do something with the HTML content
      return html
    })
    .catch((error) => {
      console.error('Fetch error:', error)
    })

  return singleitem
}
