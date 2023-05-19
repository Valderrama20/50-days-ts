import style from './Card.module.css'




const Card = ({data}:any) => {

  return <div className={style.container}>
          
        <div className={style.imgContainer}>
            <img  src={data.img} alt="" />
        </div>
        <h3>{data.name}</h3>
        <div className={style.details}>
        <ul className={style.technologies}>
          <li id={style.one} >HTML</li>
          <li id={style.two}>CSS</li>
          <li id={style.three}>JS</li>
        </ul>
        <div className={style.days}>
          day
          <div>
            {data.day}
          </div>
        </div>
          
        </div>
        
  </div>
}



export default Card