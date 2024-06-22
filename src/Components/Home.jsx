import React, { useState } from 'react'
import styled from 'styled-components'
import Pic from "../image/hp-player-crop.webp"
import Elf from "../image/2222.png"
import Int from "../image/3.png"
import Go from "../image/4.png"
import Ro from "../image/5.png"
import Gar from "../image/6.png"
import Bl from "../image/7.png"
import St from "../image/8.png"
import Gy from "../image/9.png"
import Ch from "../image/10.png"
import PopupForm from './PopupForm'

function Home() {
    const [isFormVisible, setFormVisible] = useState(false);

    const handleConnectWithSalesClick = () => {
        setFormVisible(true);
      };
    
      const closeForm = () => {
        setFormVisible(false);
      };

  return (
    <DIV>
      <header>
        <div className='left'>
            <nav>
                <span>braze</span>
                <p>How it Works</p>
                <p>Product</p>
                <p>Solutions </p>
                <p>Customers</p>
                <p>Success</p>
                <p>Partners</p>
                <p>Resources</p>
                <p>Company</p>
            </nav>
        </div>
        <div className='right'>
            <select name="" id="">
                <option value="us"> US</option>
            </select>
            <button id='login'>Login</button>
            <button id='get_start'>Get Started</button>
        </div>
      </header>
    
    {/* header end */}
    
      <div className='main'>
        <div className='text_con'>
            <h1>There's never been a better time to be a better marker.<span>TM</span></h1>
            <p>Data is flowing and channels are growing. Customers are demanding the world, while AI already transfroming it. Manage it all with the right <span>customer engagement platform.</span></p>
            <div className='btns'>
                <button>Get Started</button>
                <button>Watch Video</button>
            </div>
        </div>
        <div className='image_con'>
            <img src={Pic} alt="" />
        </div>
      </div>
      
      {/* main end */}

      <div className='banner'>
        <h3>MADE TO SCALE WITH COMPANIES OF ALL SIZES</h3>
        <div className='icon_con'>
            <div className='icons'>
                <img src={Elf} alt="" />
                <img src={Int} alt="" />
                <img src={Go} alt="" />
                <img src={Ro} alt="" />
                <img src={Gar} alt="" />
                <img src={Bl} alt="" />
                <img src={St} alt="" />
                <img src={Gy} alt="" />
                <img src={Ch} alt="" />

                {/* Duplicate set of images */}
                
                <img src={Elf} alt="" />
                <img src={Int} alt="" />
                <img src={Go} alt="" />
                <img src={Ro} alt="" />
                <img src={Gar} alt="" />
                <img src={Bl} alt="" />
                <img src={St} alt="" />
                <img src={Gy} alt="" />
                <img src={Ch} alt="" />
            </div>
            
        </div>
        <button className='connect' onClick={handleConnectWithSalesClick}>
            Connect With Sales
        </button>
      </div>
      

      {isFormVisible && <PopupForm closeForm={closeForm} />}

    </DIV>
  )
}

export default Home

const DIV = styled.div`
    header{
        
        width: 80%;
        background-color: white;
        border-radius: 50px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        margin-top: 30px;
    }

    nav{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 15px;
        font-weight: bolder;
    }
    p{
        font-size: 12px;
    }
    nav>span{
        font-family:Cedarville Cursive;
        font-size: 25px;
    }
    select{
        margin-right: 5px;
        background-color: whitesmoke;
    }
    #login{
        margin-right: 5px;
        background: none;
        border: none;
        font-weight: bold;
        cursor: pointer;
    }
    #get_start{
        margin-right: 5px;
        border-radius: 50px;
        border: none;
        padding: 13px 20px 13px 20px;
        background-color: #4E0BE0;
        color: white;
        font-weight: bold;
        cursor: pointer;
    }

    .main{
        display: flex;
        width: 80%;
        margin: auto;
        color: white;
        height: 55vh;
    }
    .text_con{
        width: 50%;
        padding: 0;
        margin: 0;
        display:flex ;
        gap: 20px;
        flex-direction: column;
        padding-top: 30px;
    }
    .text_con>h1{
        font-size: 54px;
    }
    .text_con>h1>span{
        font-size: 10px;
        position: relative;
        top: -20px;
    }

    .text_con>p{
        font-size: 16px;
        color: #e7dede;
        margin-top: -20px;
    }
    .text_con>p>span{
        color: white;
        font-weight: bold;
    }

    .image_con{
        
        width: 50%;
    }
    .image_con >img{
        width: 550px;
        border-radius: 5px;
        height: 560px;
    }
    .btns>button:nth-child(1){
        border-radius:50px;
        border:none;
        padding: 15px;
        background-color: white;
        color: #8136CF;
        font-weight:bold;
        cursor: pointer;
    }
    .btns>button:nth-child(2){
        border:none;
        background: transparent;
        padding: 15px;
        color: white;
        font-weight: bold;
        cursor: pointer;
    }

    .banner{
        background-color: white;
        border-radius: 70px 70px 0 0;
        text-align: center;
        margin: auto;
        padding-top: 10px;
        height: 223px;
        margin-top: 70px;
    }
    .banner>h3{
        color: gray;
        margin-bottom: 50px;
    }

    .icon_con{
        width: 80%;
        margin: auto;
        display: flex;
        overflow: hidden;
    }
    .icons{
        width: 100%;
        display:flex ;
        gap: 0px 50px;
        animation: slide 18s linear infinite;
    }

    @keyframes slide {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-50%);
        }
    }

    .connect{
        position: relative;
        top:-45px;
        left: 500px;
        width: 250px;
        margin-right: 5px;
        border-radius: 50px;
        border: none;
        padding: 15px 20px 15px 20px;
        background-color: #4E0BE0;
        color: white;
        font-weight: bold;
        cursor: pointer;
    }
`

