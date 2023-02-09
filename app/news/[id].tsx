import { getsinglearticle } from '../../lib/scrape'

const page = async ({ params }: { params: { [key: string]: string } }) => {
  const articleid = params.id
  const article = await getsinglearticle(articleid)

  return (
    <div>
      <h1>news article title</h1>
      <h5> somthing about the article like info on whom wrote it and date</h5>
      <p>compressed article body of text</p>
    </div>
  )
}

export default page
