import Home from "./Home";

const HomeContainer = (props) => {
    
    const homeArray = props.homes.map(home => {
        return <Home key={home.id} home={home} deleteHome={props.deleteHome}/>
    })
    return(
        <>
        {homeArray}
        </>
    );
}

export default HomeContainer;