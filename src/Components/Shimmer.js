const Shimmer = ()=>{
    return(
        <div className="container shimmer_cardgroup">
           {Array(20)
           .fill("")
           .map((e, index)=>(  <div key={index} className="shimmer_card">
                <div className="shimmer_image"></div>
                <div className="shimmer_rest_content"></div>
            </div>))}
          
        </div>
    )
}
export default Shimmer;