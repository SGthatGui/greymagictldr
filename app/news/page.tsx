import Newslist from '@/ui/newslist';
import Search from '@/ui/search';
import styles from './page.module.css';
import Link from 'next/link';

const page = async () => {
  const sample = {
    status: 'ok',
    totalResults: 927,
    articles: [
      {
        source: {
          id: 'engadget',
          name: 'Engadget',
        },
        author: 'Mat Smith',
        title: 'The Morning After: Netflix’s password-sharing crackdown begins',
        description:
          'Netflix is rolling out changes to account sharing in Canada, New Zealand, Portugal and Spain after trialing the change in Latin America. If you live in one of these countries, you must set a primary location for where you use it. Then, if you have friends or …',
        url: 'https://www.engadget.com/the-morning-after-netflixs-password-sharing-crackdown-begins-121557582.html',
        urlToImage: 'https://s.yimg.com/os/creatr-uploaded-images/2022-10/c7a480f0-4bc9-11ed-bd5f-f781993deb63',
        publishedAt: '2023-02-09T12:15:57Z',
        content:
          'Netflix is rolling out changes to account sharing in Canada, New Zealand, Portugal and Spain after trialing the change in Latin America. If you live in one of these countries, you must set a primary … [+3886 chars]',
      },
      {
        source: {
          id: null,
          name: 'The Guardian',
        },
        author:
          'Presented by Max Rushden with Barry Glendenning, Jonathan Liew and Lucy Ward. Produced by Joel Grove and our executive producer is Max Sanderson',
        title: 'Leeds’ no-manager bounce and a big weekend ahead – Football Weekly Extra',
        description:
          'Max Rushden is joined by Barry Glendenning, Jonathan Liew and Lucy Ward to preview the upcoming round of Premier League fixturesRate, review, share on Apple Podcasts, Soundcloud, Audioboom, Mixcloud, Acast and Stitcher, and join the conversation on Facebook, …',
        url: 'https://www.theguardian.com/football/audio/2023/feb/09/leeds-manchester-united-arsenal-everton-liverpool',
        urlToImage:
          'https://i.guim.co.uk/img/media/b3aebef338d98a0b836d8f09c1842df49c8a6186/0_173_5198_3119/master/5198.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=710f160b2546ab60416ad1beb1cda136',
        publishedAt: '2023-02-09T12:59:26Z',
        content:
          'Rate, review, share on Apple Podcasts, Soundcloud, Audioboom, Mixcloud, Acast and Stitcher, and join the conversation on Facebook, Twitter and email.\r\nToday: Leeds draw 2-2 away at Manchester United … [+476 chars]',
      },
      {
        source: {
          id: null,
          name: 'The Guardian',
        },
        author: 'Samuel Gibbs Consumer technology editor',
        title: 'OnePlus Buds Pro 2: good-sounding earbuds with spatial audio for Android',
        description:
          'Noise cancelling buds are some of the first to support Google’s new surround sound featureFinally, an Android rival to the AirPods Pro has arrived. OnePlus’s new Buds Pro 2 noise cancelling earbuds are some of the first on the market to support Google’s new s…',
        url: 'https://www.theguardian.com/technology/2023/feb/09/oneplus-buds-pro-2-review-earbuds-audio-android-noise-cancelling-google',
        urlToImage:
          'https://i.guim.co.uk/img/media/b5f5f5c35710dab94d1e18f3a97af4299b825b96/330_0_4669_2801/master/4669.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctcmV2aWV3LTQucG5n&enable=upscale&s=8c14f68676431a140b1836dfbd0a9455',
        publishedAt: '2023-02-09T07:00:18Z',
        content:
          'Finally, an Android rival to the AirPods Pro has arrived. OnePluss new Buds Pro 2 noise cancelling earbuds are some of the first on the market to support Googles new spatial audio virtual surround so… [+6801 chars]',
      },
      {
        source: {
          id: null,
          name: 'The Guardian',
        },
        author: 'Sam Edwards',
        title: 'Portrait of a killer: art class in one of Mexico’s most notorious prisons',
        description:
          'In 2016, artist César Aréchiga talked one of Mexico’s most dangerous maximum security prisons into letting him run art classes for its inmates, many of them violent gang members. Could he really change their lives?After two decades working in some of Mexico’s…',
        url: 'https://www.theguardian.com/world/2023/feb/09/portrait-of-a-killer-art-class-in-one-of-mexicos-most-notorious-prisons',
        urlToImage:
          'https://i.guim.co.uk/img/media/85dfe24597727891427b9089fc7da507e782b0c9/0_0_5000_3000/master/5000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=17922b35d5d33e473c8df47f379c436a',
        publishedAt: '2023-02-09T06:00:17Z',
        content:
          'After two decades working in some of Mexicos toughest prisons, warden Ángeles Zavala thought she had seen it all. Then one morning in 2016, she arrived for work at Puente Grande prison to find a loca… [+27582 chars]',
      },
      {
        source: {
          id: null,
          name: 'MacRumors',
        },
        author: 'Joe Rossignol',
        title: "Google Maps to Offer Turn-by-Turn Directions in iPhone's Dynamic Island",
        description:
          'Google today announced that its Maps app will support Live Activities in the coming months, providing iPhone users with access to turn-by-turn directions on the Lock Screen and in the Dynamic Island on the iPhone 14 Pro and iPhone 14 Pro Max.\n\n\n\n\n\nLive Activi…',
        url: 'https://www.macrumors.com/2023/02/08/google-maps-to-support-live-activities/',
        urlToImage:
          'https://images.macrumors.com/t/pFMmZmk311K4MXdBLtWP9UWQGdA=/2500x/article-new/2022/09/iphone-14-pro-max-deep-purple.jpg',
        publishedAt: '2023-02-09T03:44:49Z',
        content:
          'Google today announced that its Maps app will support Live Activities in the coming months, providing iPhone users with access to turn-by-turn directions on the Lock Screen and in the Dynamic Island … [+995 chars]',
      },
      {
        source: {
          id: null,
          name: 'Hipertextual',
        },
        author: 'Félix Palazuelos',
        title: 'Google no dará prioridad al contenido generado por humanos frente al de la IA en su buscador',
        description:
          'Tras la presentación de Bard, su chat de inteligencia artificial, y su integración en el buscador para ayudar a los usuarios a encontrar lo que buscan mediante una respuesta sencilla y clara en lenguaje natural en lugar de dirigirlo directamente a una página …',
        url: 'http://hipertextual.com/2023/02/seo-google-ia-prioridad',
        urlToImage: 'https://imgs.hipertextual.com/wp-content/uploads/2023/02/google-seo.jpeg',
        publishedAt: '2023-02-09T09:07:31Z',
        content:
          'Tras la presentación de Bard, su chat de inteligencia artificial, y su integración en el buscador para ayudar a los usuarios a encontrar lo que buscan mediante una respuesta sencilla y clara en lengu… [+6670 chars]',
      },
    ],
  };

  return (
    <div className={styles.newspage}>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control mb-4'
          placeholder='Search your news articles'
          aria-label="Recipient's username"
          aria-describedby='basic-addon2'
        />
        <div className='input-group-append mb-4 '>
          <button
            className='btn btn-primary'
            type='button'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-search'
              viewBox='0 0 16 16'
            >
              <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
            </svg>
          </button>
        </div>
      </div>
      <div className={styles.cardcontainer}>
        {sample &&
          sample.articles.map((article) => (
            <div
              className={styles.newspagecard}
              key={article.url}
            >
              <div
                className={`${styles.imgcard}`}
                style={{
                  backgroundImage: `url(${article.urlToImage})`,
                }}
              ></div>
              <h3 className='mb-3'>
                <a href={article.url}>{article.title}</a>
              </h3>
              <p>{article.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default page;
