import './App.css'
const Event = ({eventname, description, organizer, city, points, startTime, endTime, numberOfParticipants }) => {
    const MY_DOMAIN = 'http://localhost:3000'
    return (
        <div className="event">
            {/* <div className="creator_info">
                <img className="" src={`${MY_DOMAIN}/homepic.jpeg`} width="100px" height="100px" alt="post_image"/>
                
                <span style={{fontSize:'20px', fontWeight:'bold'}}>{name}, {city}</span>
            </div> */}
            <h3>{eventname}</h3>

            <div className="event_info">
                <label style={{fontWeight:'bold'}} > Description: </label> <p>{description}</p>
                <label style={{fontWeight:'bold'}} > Organizer: </label> {organizer}<br/>
                <label style={{fontWeight:'bold'}} > Location: </label> {city}<br/>
                <label style={{fontWeight:'bold'}} > Points: </label> {points}<br/>
                <label style={{fontWeight:'bold'}} > Time: </label> {startTime} - {endTime}<br/><br/>
                <label style={{fontWeight:'bold', color:'green', fontSize:'25px'}} > {numberOfParticipants} </label> are attending!
            </div>

            <div className="event_pic">
                <img className="event_pic" src={`${MY_DOMAIN}/homepic.jpeg`} width="450px" height="250px" alt="post_image"/>
            </div>

            <div className="attendButton" >
                <button className="attendEvent"> Attend</button>
            </div>
           
{/* 
            <img className="post_image" src={`${MY_DOMAIN}/homepic.jpeg`} width="800px" height="550px" alt="post_image"/>
            <h4 style={{fontSize:'20px', fontWeight:'bold'}}>{fullname} <span style={{fontWeight: 'lighter'}}>{caption}</span> </h4>  */}

            <br/>
            
        </div>
    )
}

export default Event