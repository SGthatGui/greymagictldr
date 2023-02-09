export const newsorgsearchcall = async () => {
  const searchlist = await fetch(
    'https://newsapi.org/v2/everything?q=apple&apiKey=bef248401f3848159f196f961915b756'
  ).catch((err) => console.log(err))
  console.log(searchlist)
}
