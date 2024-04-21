import React from 'react';
import '../../style/layout.css'
import '../../style/about.css'

const About = () => {
  const about1 = "Ik sta op de drempel van een belangrijk moment in mijn leven: het afronden van mijn opleiding toegepaste informatica aan de PXL. Binnen deze opleiding heb ik me gespecialiseerd in het vakgebied AI & Robotics, wat geen toeval is. Artificiële intelligentie staat immers centraal in mijn (academische) belangstelling, samen met web development en, sinds kort, ontwikkelen van videogames. Deze gebieden zijn een natuurlijk vervolg op mijn interesses als kind, toen ik me constant afvroeg hoe deze zaken achterliggend functioneerden. Buiten de academische wereld vind ik plezier en inspiratie in mode/kleding en tactische bord- en kaartspellen. "
  const about2 = "Deze interesses zijn misschien op het eerste gezicht niet direct gerelateerd aan mijn studie, maar hebben me om mijn creatieve vaardigheden te verfijnen en probleemoplossend na te denken. Ik beschouw mezelf als een meegaand en optimistisch persoon. Deze eigenschappen stellen me in staat om effectief te werken binnen groepen en de nodige rollen aan te vullen om onze doelen te bereiken. Toch ben ik me bewust van mijn valkuilen; soms kom ik wat passief over en laat ik me overrompelen door meer extraverte groepsgenoten. Bovendien is openbaar spreken een gebied waarin ik me nog verder wil ontwikkelen. Desondanks geloof ik sterk in mijn persoonlijke groei en ben ik vastberaden deze uitdagingen te overwinnen door mijn vaardigheden actief te ontwikkelen en buiten mijn comfortzone te treden. Mijn ambities reiken verder dan enkel het academisch vlak. Op de korte termijn streef ik na het afronden van mijn studie naar het vinden van boeiende, uitdagende jobervaringen. Graag zou ik de komende 3 tot 5 jaar nieuwe vaardigheden en competenties verwerven, buiten de kaders die door mijn opleiding zijn gesteld. Zo zou ik me bijvoorbeeld verder willen verdiepen in de principes en technieken achter full-stack development en front-end javascript frameworks zoals Angular en React. Deze concepten werden immers niet binnen mijn keuzetraject behandeld. Een bijzonder doel voor mij is ook om veder te duiken in de wereld van game development, een interessegebied waar ik recent mee ben begonnen te experimenteren. "
  const about3 = "Binnen 5 jaar wil ik mijn droom realiseren om zelfstandig een game te hebben ontwikkeld en uitgebracht, een ambitie die de creatieve en technische vaardigheden die ik tijdens mijn studie heb opgedaan, combineert met mijn persoonlijke interesses. Ik ben me bewust van de gebieden waarop ik moet groeien en de uitdagingen die ik moet overwinnen. Mijn educatieve reis en extracurriculaire activiteiten hebben mij een stevige basis gegeven, maar ik besef me dat het echte leren nu pas begint. Ik ben enthousiast om nieuwe ervaringen te beleven, mijn horizon te verbreden met nieuwe competenties en mijn professionele en persoonlijke valkuilen aan te pakken."
  
  return (
    <div className="about-container">
        <div className='text-section'>
            <p>{about1}</p>
        </div>
        <div className='text-section'>
            <p>{about2}</p>
        </div>
        <div className='text-section'>
            <p>{about3}</p>
        </div>
        <div className="about-buttons">
            <a href="/files/cv.pdf" target="_blank" rel="noopener noreferrer">Mijn CV</a>
            <a href="/files/cv.pdf" target="_blank" rel="noopener noreferrer">Mijn Portfolio</a>
            <a href="/files/cv.pdf" target="_blank" rel="noopener noreferrer">Mijn Thalento</a>
        </div>
    </div>
  )
}

export default About;