

export default function ProjectOverview(props) {
    return (
        <div className = "project-overview-container">

            <div className = "project-overview-pic">
               <img src = {props.pic} alt = {props.alt}/>
            </div>

            <div className = "project-overview-title">
                <h1>{props.title}</h1>
            </div>

            <div className = "project-summary">

                <div className = "project-desc">
                    {props.description}
                </div>

                <div dangerouslySetInnerHTML={{__html: props.info}}>
                </div>

            </div>



        </div>

    )
}