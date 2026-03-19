export default function projectProvider(props) {
    console.log(props.key)
    return (
        <>
            <div className='project-card' key={props.tittle}>
                <div className='card-img'>
                    <img src={props.img} alt="" />
                </div>
                <div className="card-body p-0">
                    <div className='cb-1'>
                        <p className='gray-color m-0' style={{ padding: "5px" }}>{props.tools}</p>
                    </div>
                    <div className='cb-2'>
                        <h3 className="fs-5">{props.tittle}</h3>
                        <p style={{fontSize:'12px'}} className="gray-color">{props.summary}</p>
                        <div>
                            <button className='btn-varient-1'>Live</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}