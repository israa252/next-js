
 import Link from "next/link";
 export default async function PostPage(){
    const response = await  fetch('https://jsonplaceholder.typicode.com/posts',{
        next:{
            revalidate:120
        }
    });
    const posts =await response.json();
     const postJSX = posts.map((post) =>{
        return(
            <Link style={{width:"70%"}} href={`/posts/${post.id}`}>
            <div style={{width: "100%" ,
            background:"pink",
            padding:"10px",
            borderRadius:"5px",
            color:"black",
            margin:"7px"}}>
                <h1 style={{padding:"10px"}}>{post.title}</h1>
                <hr/> 
                <p style={{padding:"10px"}}>{post.body}</p>
            </div>
            </Link>
        );
     });

   return (
    <div>
        <h1>
          Posts Page  
        </h1>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>{postJSX}</div>
    </div>
   ) 
}