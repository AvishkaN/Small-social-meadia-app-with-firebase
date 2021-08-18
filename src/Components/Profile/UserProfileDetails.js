import React, { useContext, useRef, useState } from 'react'
import styled from 'styled-components';
import AuthContext from '../../store/auth-context'
import Post from './post';

function UserProfileDetails(props) {

    // Hooks
    const authCTX=useContext(AuthContext);
    const[showMediaWindow,SetshowMediaWindow]=useState(false);
    const [x,setX]=useState({post:'initial post value',image:'url'});

    const postTextInputref=useRef();
    const postImageInputref=useRef();
    //


    //get userName
    let userName=authCTX.email;
    userName=userName.split('@')[0]; //spliting userName
    //


    // temp
    
    //
    
    console.log(authCTX);
    console.log(x);

    // functions
    const handlePostButton=()=>{
        console.log(1);

        setX(prevState=>{
            return  {
                ...prevState,
                post:postTextInputref.current.value,
            }
        });

        
    }
    const handleImageButton=()=>{
        console.log(2);
        console.log(postImageInputref.current?.value);
        
        setX(prevState=>{
            return  {
                ...prevState,
                image:postImageInputref.current?.value,
            }
        });
        
       
    }

    const handleMeadiaClick=()=>{
        SetshowMediaWindow(prevState=>{
            console.log(prevState);
            prevState && handleImageButton()
            return !prevState
        })
    }
    //
  
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
                        <textarea name="" id="" cols="30" rows="10" ref={postTextInputref}></textarea>
                        <button className='media-btn' onClick={handleMeadiaClick}>medias 📷 </button>
                        <button onClick={handlePostButton}>Post ➡</button>
                        {
                        showMediaWindow &&
                        <div className='media'>
                            <label className=''>image</label>
                            <input type="text" ref={postImageInputref}/>
                            <button onClick={handleMeadiaClick}>ok</button>
                        </div>
                        }
                    </div>
                    <div className='postList'>
                        {
                            authCTX.data.map(post=><Post key={post.id} postData={{image:post.image,post:post.post}}/>)
                            // (<h1>hello</h1>)
                      }
                       {/* <Post/> */}
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
        /* height: 898px; */
        height: 1315px;
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
  
`;

export default UserProfileDetails;
