import './App.css'
const Post = ({fullname, city, caption}) => {
    const MY_DOMAIN = 'http://localhost:3000'
    return (
        <div className="post">
            <div className="creator_info">
                <img className="" src={`${MY_DOMAIN}/homepic.jpeg`} width="100px" height="100px" alt="post_image"/>
                
                <span style={{fontSize:'20px', fontWeight:'bold'}}>{fullname}, {city}</span>
            </div>
            <hr/>
           
            <img className="post_image" src={`${MY_DOMAIN}/homepic.jpeg`} width="800px" height="550px" alt="post_image"/>
            <h4 style={{fontSize:'20px', fontWeight:'bold'}}>{fullname} <span style={{fontWeight: 'lighter'}}>{caption}</span> </h4> 

            <br/>
            
        </div>
    )
}

export default Post
