import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import Col from "react-bootstrap/Col"
import './App.css'
import Nav from 'react-bootstrap/Nav'
import './App.css'
import * as React from "react";
import OurNav from './OurNav'
import {useState} from 'react'

const Addpost = () => {
  const [data, setData] = useState({
      activityType: '',
      additionalInfo: '',
      description: '',
      event_picture: '',
  })
  
  const onAdditionalInfo= (e) => {
    const temp = data
    temp.additionalInfo = e.target.value
    setData(temp)
    console.log(e.target.value)
  }

  const onDescription = ({target:{value}}) => {
    const temp = data
    temp.description = value
    setData(temp)
  }

  const [selected, setSelected] = React.useState("");


  const [isPrivate, setPrivate]= useState(false);

  const makePrivate= ()=>{
    setPrivate(!isPrivate);
  }



  
  /** Function that will set different values to state variable
   * based on which dropdown is selected
   */
  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
    const temp=data;
    temp.activityType = event.target.value
    if (event.target.value === 'Eating less meat') {
      temp.additionalInfo = 'Omnivore'
    } else if (event.target.value === 'Transit') {
      temp.additionalInfo = 'Carpooling'
    }
    setData(temp);
    console.log(temp)
  
  };
    
      
    
  const onSubmit = () => {
    console.log(data)
      const postPost = async () => {
        await fetch('http://localhost:3001/post', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({data}),
        });
      }
      postPost()
    console.log('Your post is posted')
  }




   
    
  /** Different arrays for different dropdowns */
   
  const meat = ["Omnivore", "Vegeterian"];
  const transit = ["Carpooling", "Walking", "Biking", "Public Transit"];
  
  /** Type variable to store different array for different dropdown */
  let type = null;
  
  /** This will be used to create set of options that user will see */
  let options = null;
  
  /** Setting Type variable according to dropdown */
  if (selected === "Eating less meat") {
    type = meat;
  } if (selected === "Transit") {
    type = transit;
  }
  
  
  /** If "Type" is null or undefined then options will be null,
   * otherwise it will create a options iterable based on our array
   */
  if (type) {
    options = type.map((el,i) => <option value={el} key={i}>{el}</option>);
  }

  const MY_DOMAIN = 'http://localhost:3000'
  if (type) {
    return (
        <div>
            <OurNav />
        <div className="addpost">
            <div className="creator_info">
                <img className="" src={`${MY_DOMAIN}/homepic.jpeg`} width="100px" height="100px" alt="post_image"/>
                <span style={{fontSize:'20px', fontWeight:'bold'}}>Your Name, Your City</span>
            </div>

        <div className="">
          <div className="">  
              <form role="form1">
              <br styles="clear:both" />
                {/* <div className="form-group">
                    <label style={{fontSize:'18px', fontWeight:'bold'}}>Event Name:</label>
                  <input type="text" className="form-control" id="title" name="title" placeholder="Event name" required />
                </div> */}

                <div className="form-group">
                    <label style={{fontSize:'18px', fontWeight:'bold'}}>Event Type:</label>
            
        <div>
          
          <select name="eventType" id="eventType" onChange={changeSelectOptionHandler} className="form-control">
            <option>Choose your activity</option>
            <option value="Picking up trash">Picking up trash</option>
            <option value="Recycling">Recycling</option>
            <option value="Composting">Composting</option>
            <option value="Eating less meat">Eating less meat</option>
            <option value="Transit">Transit</option>
            <option value="Planting tree">Planting tree</option>
          </select>
        </div>

        <div>
          <select onChange={onAdditionalInfo} className="form-control" name="activityType" id="activityType">
            {
              /** This is where we have used our options variable */
              options
            }
          </select>
        </div>     
                </div>
                
                <div className="form-group">
                {/* <label style={{fontSize:'18px', fontWeight:'bold'}}>Description:</label> */}
                <textarea onChange={onDescription} className="form-control" type="textarea" name="description" id="description" placeholder="Write the description of the event" maxlength="140" rows="7"></textarea>
                </div>
                <input type="file" name="event_picture" id="event_picture"/> <br/>

                <label htmlFor="makeitPrivate">Check the box if you want to make yur activity private: </label>
                <input onClick={makePrivate} type="checkbox" id="makeitPrivate" name="makeitPrivate" value={isPrivate} ></input><br/>

              <button onClick={onSubmit} type="button" id="submit" name="submit" className="btn btn-primary pull-right">POST</button>
              </form>
          </div>
        </div>
        </div>
        </div>
    )
        }else{

            return (
                <div>
                   <OurNav />
                <div className="addpost">
                    <div className="creator_info">
                        <img className="" src={`${MY_DOMAIN}/homepic.jpeg`} width="100px" height="100px" alt="post_image"/>
                        
                        <span style={{fontSize:'20px', fontWeight:'bold'}}>Your Name, Your City</span>
                    </div>
        
                <div className="">
                  <div className="">  
                      <form role="form1">
                      <br styles="clear:both" />
                        {/* <div className="form-group">
                            <label style={{fontSize:'18px', fontWeight:'bold'}}>Event Name:</label>
                          <input type="text" className="form-control" id="title" name="title" placeholder="Event name" required />
                        </div> */}
        
                        <div className="form-group">
                            <label style={{fontSize:'18px', fontWeight:'bold'}}>Event Type:</label>
                    
                <div>
                  
                  <select name="activityType" id="activityType" onChange={changeSelectOptionHandler} className="form-control">
                    <option>Choose your activity</option>
                    <option value="Picking up trash">Picking up trash</option>
                    <option value="Recycling">Recycling</option>
                    <option value="Composting">Composting</option>
                    <option value="Eating less meat">Eating less meat</option>
                    <option value="Transit">Transit</option>
                    <option value="Planting tree">Planting tree</option>
                  </select>
                </div>
            
                        </div>
                        
                        <div className="form-group">
                        {/* <label style={{fontSize:'18px', fontWeight:'bold'}}>Description:</label> */}
                        <textarea onChange={onDescription} className="form-control" type="textarea" name="description" id="description" placeholder="Write the description of the event" maxlength="140" rows="7"></textarea>
                        </div>
                        <input type="file" name="event_picture" id="event_picture"/><br/>

                      <label htmlFor="makeitPrivate">Check the box if you want to make yur activity private: </label>
                      <input onClick={makePrivate} type="checkbox" id="makeitPrivate" name="makeitPrivate" value={isPrivate} ></input><br/>
        
                      <button href='/feed' onClick={onSubmit} type="button" id="submit" name="submit" className="btn btn-primary pull-right">POST</button>
                      </form>
                  </div>
                </div>
                </div>
                </div>
            )

        }
}

export default Addpost
