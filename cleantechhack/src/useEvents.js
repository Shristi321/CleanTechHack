import React, {useState,useEffect,useRef} from 'react';

const useEvents = () => {
    const [data, setData] = useState('')
    const [dataReceived, setDataReceived] = useState(false)

  
    useEffect(() => {
        const getEvents = async () => {
            const response = await fetch('http://localhost:3001/event/location', {
                method: 'GET',
                mode: 'cors',
            });
    
            const temp = await response.json();
            setData(temp)
            setDataReceived(true)
    
            console.log(data)
        }
    
        getEvents() 
          
    }, [])


      
  
   return {data, dataReceived}  
    
}

export default useEvents