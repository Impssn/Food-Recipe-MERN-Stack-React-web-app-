import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Foods3 = () => {
    return(
        <div>
            <div className="card5">
            <br/>
               <center><Rating/></center>
               <img src="https://tse4.mm.bing.net/th?id=OIP.KChmYgUtTdYUlczrM-aa_gHaHa&pid=Api&P=0" alt="" />
               <h3>Lassi</h3>
               <button className="bt2"><Link to={"/lassi"}>RECIPE</Link></button>
            </div>
            <br/>
            <div className="card6">
            <br/>
               <center><Rating/></center>
               <img src="https://tse4.mm.bing.net/th?id=OIP.eRCBh1SeHKhmKewhOUWadwHaHa&pid=Api&P=0" alt="" />
               <h3>Maggi</h3>
               <button className="bt2"><Link to={"/maggi"}>RECIPE</Link></button>
            </div>
        </div>
    )
}

export default Foods3;