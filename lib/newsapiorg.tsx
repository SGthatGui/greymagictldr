export const newsorgsearchcall = async () => {
  const searchlist = await fetch('https://newsapi.org/v2/everything?').catch(
    (err) => console.log(err)
  )
  console.log(searchlist)
}
