import React, { Component } from 'react'
import '../componants/NewItem.css'

export class NewItem extends Component {
   
    render() {
       let  {title,description,Imageurl,newsurl}  = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={!Imageurl?"https://cdn.vox-cdn.com/thumbor/ngzVkj-qwrfqKU5QBK40eqtmmCw=/0x0:1920x1080/1200x628/filters:focal(545x495:546x496)/cdn.vox-cdn.com/uploads/chorus_asset/file/25211546/Waymo_One_I_PACE_on_Freeway_.png":Imageurl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}...</p>
                            <a href={newsurl} className="btn btn-sm btn-primary">read more</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewItem
