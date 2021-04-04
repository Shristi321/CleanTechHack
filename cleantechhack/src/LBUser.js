import './App.css'

const LBUser = ({fullname, city, points}) => {
    const MY_DOMAIN = 'http://localhost:3000'
    return (
        <div>
             <div className="leaderboard_users">
                <img className="userpic" src={`${MY_DOMAIN}/homepic.jpeg`} alt="post_image"/>
                
                <span style={{marginTop: '1.4vmin',fontSize:'1.5vmin', fontWeight:'bold'}}>{fullname}</span>
                <span style={{marginTop: '1.4vmin',fontSize:'1.5vmin', fontWeight:'bold', float:'right'}}> {points}</span>
        </div>
        </div>
    )
}

export default LBUser
