import { useState } from 'react';


const Home = (props) => {
    const [liked, setLiked] = useState(false)

    const toggleLiked = () => {
        setLiked(!liked)
    }

    const handleDelete = (e) => {
        props.deleteHome(props.home.id)
    }

    return(
        <>
            <p>{props.home.id}</p>
            <p>{props.home.description}</p>
            <p>{props.home.address}</p>
            <p>{props.home.price}</p>
            <button onClick={handleDelete}>Delete</button>
            {liked ? <button onClick={toggleLiked}>⭐</button> : <button onClick={toggleLiked}>☆</button>} 
        </>
    );


    
}
export default Home;

