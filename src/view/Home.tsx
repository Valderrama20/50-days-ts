import Card from "../components/card/Card"
import Header from "../components/header/Header"
import DAYS from "../utils/days"
import style from "./Home.module.css"



const Home = () => {
  return <div className={style.container}>
     <Header/>
    {DAYS.map(e => e.status? <Card data={e} key={e.day} />: null)}
  </div>                                                                                                                                                                  
}


export default Home