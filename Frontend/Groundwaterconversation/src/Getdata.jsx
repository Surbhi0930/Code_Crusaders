import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Getdata() {
    const [data, setData] = useState([]);

    useEffect(() => {
        showData();
    }, []);

    const showData = async () => {
        let result = await fetch("http://localhost:3000/getpost");
        result = await result.json();
        console.log(result);
        setData(result);
    };

    return (
        <>
        <h1 style={{textAlign:"center"}} >Suggestion Box</h1>
        <div className="container">
            <div className="row">
                {data.map((item) => (
                    <div className="cards" key={item.id}>
                        <h2>{item.textbody}</h2>
                        <h3>{item.createAt}</h3>
                        <h3>posted by: {item.postedBy.fullname}</h3>
                    </div>
                ))}
            </div>
        </div>
        <div className="home-button">
                <button><Link to='/'>Home</Link></button>
            </div>
        </>
        
    );
}

export default Getdata;
