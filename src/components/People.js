import React, {useState, useEffect} from 'react';

const People = (props) => {
    const [person, setPerson] = useState({});
    const [message, setMessage] = useState("These aren't the droids you're looking for");


    useEffect(() => {
        fetch("https://swapi.dev/api/people/" + props.id)
            .then(response => response.json())
            .then(response => {
                setPerson(response);
                console.log(response);
            })
            .catch(err => console.log(err))
    }, [props.id])

    return (

        <>
            {person.name !== undefined ?
                <>
                    <h1>Name: {person.name}</h1>
                    <p>Height: {person.height}</p>
                    <p>Mass: {person.mass}</p>
                    <p>Hair Color: {person.hair_color}</p>
                    <p>Skin Color: {person.skin_color}</p>
                </> : <h2>{message}</h2>}
        </>
    );

    // useEffect(() => {
    //     axios.get(`https://swapi.dev/api/people/${id}`)
    
    //     .then(response => {
    //         setPeople(response.data)
    //     })

    //     .catch(err => {
    //             console.log(err);})
    //         });

    // return (
    //     <div>
    //         <h1 >{people.name} </h1>
    //         <ul>
    //             <li>Height :{people.height}</li>
    //             <li>Mass :{people.mass}</li>
    //             <li>Hair Color :{people.hair_color}</li>
    //             <li>Skin Color :{people.skin_color}</li>
    //         </ul> 
            
            
    //     </div>
    // )
}

export default People
