import PostDetailes from "@/app/components/postDetailes";
import { Suspense } from "react";
 export default  async function PostDetailesPage({params}){
    const postId= params.postId;

    const loadingjsx = (

          <div>
              <h1>Loading .... ⏳😊</h1>
          </div>
       
    );
   
    // const post =await response.json();
    return(
        <div style={{padding:"20px"}}>
            <h1>Post Detailes</h1>
            <Suspense fallback={loadingjsx}>
            <PostDetailes postId={postId}/>
            </Suspense>
        </div>
    )
       
    
 }