import { Reports } from 'app/components/posts'
import Image from 'next/image'

export default function Page() {

  const intro = 'Ik ben Bryan, student Toegepaste Informatica aan de Hogeschool PXL, met een specialisatie in AI & Robotics. Hier vindt u zowel een introductie voor mezelf, als een samenvatting van alle activiteiten en ervaringen die ik heb beleefd in het kader van I-Talent. De website is gebouwd met behulp van het platform Vercel. Achterliggend heb ik voornamelijk gebruik gemaakt van React, een framework waarmee ik in aanraking ben gekomen tijdens het IT-project. Ik hoop dat u via deze weg wat meer te weten komt over mezelf, en de weg die ik heb genomen doorheen mijn opleiding.'

  return (
    <div className="home-container">
      <div className="profile-section">
        <h1 className="main-title">Hallo daar!</h1>
        <Image
          className='profile-image'
          src= "/resources/portfolio-img.jpg"
          alt="Portfolio Image"
          width={500}
          height={300}
        />
      </div>
      <section className="intro-section">
        <p>{intro}</p>
      </section>
      <div className="report-links">
        <Reports />
      </div>
    </div>
  )
}
