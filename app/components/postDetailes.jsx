import { resolve } from "styled-jsx/css";

export default  async function PostDetailes({postId}){
    // const postId= params.postId;
    await new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve();
        }, 2000)
    });
    const response = await  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,{
        next:{
            revalidate:120
        }
    });
    const post =await response.json();
    return(
        <div>
          
            <div   style={{width: "100%" ,
            background:"pink",
            padding:"15px",
            borderRadius:"10px",
            color:"black",
            margin:"5px"}}>
                <h1 style={{padding:"10px"}}>
                    {post.title}
                </h1>
                <hr/> 
                <p>{post.body}</p>
            </div>
        </div>
    )
       
    
 }