import Post from './Post'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Col from "react-bootstrap/Col"
import './App.css'
import Nav from 'react-bootstrap/Nav'
import './dashboard.css'
import OurNav from './OurNav'
import useFeed from './useFeed'

const Feed = () => {
    const {data, dataReceived} = useFeed()

    console.log(data)

    if (dataReceived) {
        return (
            <div>
                <OurNav />
                {data.map((datum,i)=> {
                    return (
                        <Post
                            key={i}
                            fullname='Carolyn Wang'
                            caption={datum.description}
                            city={datum.location}
                            date={datum.date}
                            url={datum.url}
                            // eventually pass picture here
                
                        />
                )})}
            </div>
        )
    } else {
        return (
            <OurNav />
        )
    }
}

export default Feed
