import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import AuthContext from '../../store/auth-context'

function UserProfileDetails(props) {

    const authCTX=useContext(AuthContext);
    const[showMediaWindow,SetshowMediaWindow]=useState(false);
    let userName=authCTX.email;
    userName=userName.split('@')[0]; //spliting userName
    
    console.log(authCTX);


    // functions
    const handleMeadiaClick=()=>{
        SetshowMediaWindow(prevState=>!prevState)
    }
  
     return (
        <>
        <div className="usedetails">
            <h1>details</h1>
                <DIV className="rectrange1" showsblur={props.showBlur}>fff
                    <div className="name-Holder">
                        <div className="profile-pic"></div>
                        <p className='name'>{userName}</p>
                    </div>
                    <div className='userInfo'>
                        <ul>
                            <li>softwere developer 💻</li>
                            <li>stuydied in rcc  👨‍🎓</li>
                            <li>Lives in nugegoda 🚂</li>
                            <li>from sri lanka ✈</li>
                        </ul>
                    </div>
                    <div className='createPost'>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                        <button className='media-btn' onClick={handleMeadiaClick}>medias 📷 </button>
                        <button>Post ➡</button>
                        {showMediaWindow &&
                        <div className='media'>
                            <label className=''>image</label>
                            <input type="text" />
                            <button onClick={handleMeadiaClick}>ok</button>
                        </div>
                        }
                    </div>
                    <div className='postList'>
                        <div className='post'>
                            <p>Lorem ipsum dolor sit - POST 1.</p>
                            <div className="post-btn-list">
                                <button className='post-btn like'>LiKE  ♥ ♥</button>
                                <button className='post-btn comment'>comment 📨</button>
                                <button className='post-btn share'>share 🪒</button>
                            </div>
                        </div>
                    </div>
                </DIV>
        </div>
        </>
    )
}


const DIV=styled.div`
    h1{
        color: red;
    }
 
        position: absolute;
        width: 1398px;
        height: 898px;
        left: 18px;
        top: 65px;
        border: 1px solid black;
        /* transform: scale(0.4); */
        position: relative;
        top: -61px;
        transform: scale(0.8);
        
    
         ${({ showsblur}) => showsblur && `
            filter: blur(10px);
            `}
        
    .name-Holder{
        position: absolute;
        width: 1299px;
        height: 205px;
        left: 79px;
        top: 131px;
        font-size: 50px;

        border: 1px solid black;
        box-sizing: border-box;

        .name{
            color: red;

        }
    }
    .profile-pic{
        position: absolute;
        width: 210px;
        height: 191px;
        left: 121px;

        top: 4px;
        border-radius: 123px;

        border: 1px solid black;
        box-sizing: border-box;

        background: url('https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80');
        background-size: cover; 
      
    }
    .userInfo{
        position: absolute;
        width: 549px;
        height: 560px;
        left: 18px;
        top: 346px;

        border: 1px solid #261717;
        box-sizing: border-box;
    }
    .createPost{
        position: absolute;
        width: 757px;
        height: 186px;
        left: 621px;
        top: 406px;

        border: 1px solid #000000;
        box-sizing: border-box;

        .media-btn{
            position: relative;
            left: -261px;
            top: 21px;
        }

        .media{
            height: 83px;
            width: 500px;
            position: relative;
            top: -148px;
            left: 271px;
            background: gray;

           
        }
        
    }
    .post{
        position: absolute;
        width: 755px;
        height: 246px;
        left: 623px;
        top: 618px;

        background: #C4C4C4;
    }
    .post-btn-list{
        display: flex;
        position: relative;
        top: 121px;
        left: 170px;
    }
    .post-btn {
        
        /* position: relative; */
        width: 191px;
        height: 57px;
        left: 646px;
        top: 783px;
        box-sizing: border-box;
        top: 5px;
        left: 19px; 
    }
`;

export default UserProfileDetails;
