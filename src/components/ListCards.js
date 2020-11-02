import React, { useState } from 'react';

const PersonCards = (props) => {
    const imgStyle = {
        width: '100%',
        height: '300px',
        objectFit: 'cover'
    }
    return (
        <div className="card m-3" style={{ width: '18rem'}}>
            <img className="card-img-top" src={`./${window.localStorage.path}/${props.image}`} alt="" style={imgStyle} />
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <button className="btn btn-success">View Profile</button>
        </div>
    );
}

const ListCards = () => {
    const [images, setImages] = useState([])
    const fetchImages = async () => {
        try {
            const res = await fetch('http://localhost:9000/', { method: 'get', headers: { path: window.localStorage.path }});
            const data = await res.json();
            setImages(data)
        } catch (error) {
            console.log(error)
        }
    }
    fetchImages();
    
    return (
        <div className="container d-flex flex-wrap justify-content-around mt-5" style={{ marginTop: '38px'}}>
            {
                images.map((image, index) => {
                    if(/.jpg|.jpeg|.png/g.test(image)) 
                        return <PersonCards key={index} image={image} />
                    return '';
                })
            }
        </div>
    )
}
export default ListCards;