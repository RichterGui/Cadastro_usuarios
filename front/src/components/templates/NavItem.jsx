import React from 'react'
import {Link} from 'react-router-dom'


export default props =>{
    return(
     <Link to={props.reference}>
        <i className={`fa fa-${props.icon}`}></i> {props.page}
    </Link>
)

}