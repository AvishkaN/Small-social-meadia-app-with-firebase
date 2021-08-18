import React from 'react'
import styled from 'styled-components';

function Post(props) {

   

   
    return (
        <>
            <DIV className='post'>
                <p>{props.postData.post}</p>
                <img src={props.postData.image} className='post-image' alt="" />
                <div className="post-btn-list">
                    <button className='post-btn like'>LiKE  ♥ ♥</button>
                    <button className='post-btn comment'>comment 📨</button>
                    <button className='post-btn share'>share 🪒</button>
                </div>
           </DIV>
        </>
    )
}


const DIV=styled.div`
    
        position: relative;
        top: 36pc;
        width: 772px;
        height: 500px;
        left: 580px;
        background: red;
        background: #C4C4C4; 
        
        .post-image{
            height: 300px;

        }


        .post-btn-list{
            z-index: 1;
            position: relative;
            top: 98px;



            .post-btn {
                
                width: 191px;
                height: 57px;
              
            
            }
        }

       
   
    

`;

export default Post;
