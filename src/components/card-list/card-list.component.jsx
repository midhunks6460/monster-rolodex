

import Card from "../card/card-component";

import './card-list.style.css'

const Cardlist=({monsters})=>(
    <div className="card-list">
        {monsters.map((monster)=>{
            
            return<Card monster={monster}/>
        })}
    </div>
);


export default Cardlist;