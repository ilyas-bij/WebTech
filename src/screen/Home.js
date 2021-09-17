import React ,{useState} from 'react'
import axios from 'axios';
import './Home.css'
import logo from '../img/logo.PNG'
import Card from '../component/Card'
import Loader from "react-js-loader";

function Home() {

  const [Data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [loade, setloade] = useState(true);

 
      
      const activateLasers = e => {
        setData([])
        if(e){
          setloade(false)
          axios
          .get(
            `http://localhost:5000/finde?url=${e}`
          )
          .then(res => { 
            setData(res.data.technologies)
           // console.log(res.data.technologies);
           
          })
          .catch(error => console.log(error));
        }
        
    
       
      };


      const handleChange = e => {
        setSearch(e.target.value);
      };


    return (
            <div >
                 <header className='header' >
                      <div className='logo'>
                          <img src={logo} alt='none'/>
                       </div>
                 </header>

                <section className='banner' id='banner'>
                    <div className='content'>
                       <h1>WebTech finder </h1>
                      <p>
                      Find out the technology stack of any website. Create lists of websites that use certain technologies,
                       with company and contact details. 
                      Use our tools for lead generation, market analysis and competitor research.

                      </p>
                      <div className='scanPart'>
                           <input className='inputSt' type='text'   onChange={handleChange} placeholder='WebSite URL' />
                           <button type="submit" className="button"onClick={()=>activateLasers(search)}>scan</button>
                          
                     </div>
                    </div>
                </section>
                  <div>
                          {
                                    
                            !loade ?
                                Data.length ?
                                    <div className="TechContainer">
                                        <div className="col1"></div>
                                          <div className="col2">
                                              {Data.map((item,i) =>  <div key={i}> <Card item={item}/></div>) }
                                          </div>
                                          <div className="col3"></div>
                                      </div>
                                
                                  :
                                      <div className={"row"}  style={{marginTop:'15%'}}>
                                        <div className={"item"}>
                                              <Loader type="bubble-ping"  bgColor={"#c84c4c"} type="bubble-ping"  color={'#fff'} size={200}  />
                                        </div>
                                    </div> 
                                      :null
                                    
                                
                             }
                </div>
               
            </div>
             )
}

export default Home

