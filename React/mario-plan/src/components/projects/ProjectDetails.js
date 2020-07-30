import React from 'react'

function ProjectDetails(props) {
    console.log(props);
    let id = props.match.params.id;
    return (
        <div className='container section project-details'>
            <div className='card z-depth-0'>
                <div className='card-content'>
    <span className='card-title'>Project title - {id}</span>
                    <p>Neki text lepi</p>
                </div>

                <div className='card-action gret lighten-4 grey-text'>
                    <div>Posted by</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
            
        </div>
    )
}

export default ProjectDetails
