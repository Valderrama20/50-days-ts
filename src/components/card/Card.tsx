import style from './Card.module.css'


const Card = () => {



  return <div className={style.container}>
          
        <div className={style.imgContainer}>
            <img  src='https://res.cloudinary.com/dlwurkglp/image/upload/v1684265339/Captura_de_pantalla_2023-05-16_162728_w2re0r.png' alt="" />
        </div>
        <h3>expanding-cards</h3>
        <div className={style.details}>
        <ul className={style.technologies}>
          <li id={style.one} >HTML</li>
          <li id={style.two}>CSS</li>
          <li id={style.three}>JS</li>
        </ul>
        <div className={style.days}>
          day
          <div>
            1
          </div>
        </div>
          
        </div>
        
  </div>
}



export default Card