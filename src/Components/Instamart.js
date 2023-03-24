//reusbale Section component inside Instamart component reused it with diffrent props 
const Section = ({title, Description}) =>{

    return (
        <>
                <h3>{title}</h3>
                <p>{Description} </p>
        </>

    )
}
    
const InstaMart = ()=>{
    return(
        <div className="container">
            <h1>Instamart- 100 of component inside it</h1><br/><br/>
            <Section  title ={"About us"} Description= {"This is a ABout us page" } /><br/><br/>
            <Section  title ={"Details Instamart"} Description= {"This is a detail Instamart page" } /><br/><br/>
            <Section  title ={"Products"} Description= {"This is a Product page" } /><br/><br/>
        </div>
    )
}
export default InstaMart