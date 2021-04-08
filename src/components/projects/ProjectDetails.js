import React from 'react'

export default function ProjectDetails(props) {
    const id = props.match.params.id;
    return (
        <div className="container project-list section">
          <div className="card z-depth-0 ">
            <div className="card content ">
              <span className="card-title">Project Title  {id} </span> 
              <p>Posted by ...</p>
            </div>
             <div className="card-action gret lighten-4 grey-text">   
               <div>posted by john wick</div>
               <div>2nd september, 2am</div>
             </div>
          </div>    
        </div>
    )
}

