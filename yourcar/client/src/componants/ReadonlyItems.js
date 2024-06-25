import React, { Component } from 'react'
import "../componants/Readonlyitems.css"
import { Link } from 'react-router-dom';

export class ReadonlyItems extends Component {
   
    render() {
        let {model,engine,transmission,power,torque,mileage,price,Imageurl,variants} = this.props;
        return (
            <>
                <div className="my-3">
                    <div className="cardh" style={{ width: "18rem" }}>
                        <img src={!Imageurl?"https://cdn.vox-cdn.com/thumbor/ngzVkj-qwrfqKU5QBK40eqtmmCw=/0x0:1920x1080/1200x628/filters:focal(545x495:546x496)/cdn.vox-cdn.com/uploads/chorus_asset/file/25211546/Waymo_One_I_PACE_on_Freeway_.png":Imageurl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{model}</h5>
                            <p className="card-text">engine: {engine}</p>
                            <p className="card-text">transmission: {transmission}</p>
                            <p className="card-text">power: {power}</p>
                            <p className="card-text">torque: {torque}</p>
                            <p className="card-text">mileage: {mileage}</p>
                            <p className="card-text">price: {price}</p>
                            <p className="card-text">variants:  {variants.length > 0 && `${variants[0]}, ... , ${variants[variants.length - 1]}`}</p>
                            <Link to={`/CarsInfo?model=${encodeURIComponent(model)}`} className="btn btn-sm btn-primary">Get All Info</Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ReadonlyItems


