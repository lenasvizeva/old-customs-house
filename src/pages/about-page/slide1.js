import React from 'react'
import aboutPagePic1 from './img/About_1.jpg'

export default () => (

  <div className="slide1 slide">

    <div className="container">

      <div className="container--half">

        <h2>О ресторане</h2>

        <div className="text-block">
          <p>В эпоху стремительных перемен «Старая Таможня» остается той константой 
            и уголком спокойствия и постоянства, которых нам так не хватает. 
            Благодаря верности традициям, безупречной кухне и высокому уровню сервиса, 
            «Старая таможня» позволяет своим постоянным гостям всегда чувствовать себя уверенно 
            и отдыхать в атмосфере тепла и гостеприимства.</p>

          <p>«Старая Таможня» — ресторан на Таможенном переулке, который по праву можно назвать 
            гастрономической гордостью Санкт-Петербурга. Каждому жителю и гостю славного города 
            придется по душе некая загадочность, мистицизм и в то же время неповторимый уют 
            ресторана «Старая таможня». </p>
        </div>
        
      </div>

    </div>

    <img src={aboutPagePic1} className="background--img" />

  </div>

)