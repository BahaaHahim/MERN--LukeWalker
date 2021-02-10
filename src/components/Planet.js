import React, {useState, useEffect} from 'react';

const Planet = (props) => {

const [planet, setPlanet] = useState({});
    const [message, setMessage] = useState("These aren't the droids you're looking for");    

    useEffect(()=>{
        fetch("https://swapi.dev/api/planets/"+props.id)
            .then(response => response.json())
            .then(response => {
                setPlanet(response);
                console.log(response);
            })
            .catch(err => {
                console.log(err)
            })
    },[props.id])

    return(
        <>
            {planet.name !== undefined ?
                <>
                    <h1>{planet.name}</h1>
                    <p>Surface Water: {planet.surface_water}</p>
                    <p>Terrain: {planet.terrain}</p>
                    <p>Climate: {planet.climate}</p>
                    <p>Population: {planet.population}</p>
                </>:<h2>{message}</h2>}
        </>
    );
    
    // useEffect(() => {
    //     axios.get(`https://swapi.dev/api/planets/${id}`)
    
    //     .then(response => {
    //         setPlanet(response.data);
    //         console.log(response.data);
    //     })

    //     .catch(err => {
    //             console.log(err);})
    //         }, []);

    


    // return (

    //     <div >

            
            
    //          <h1 >{planet.name} </h1>
    //          <ul>
    //              <li>Climate :{planet.climate}</li>
    //              <li>Terran :{planet.terrain}</li>
    //              <li>Surface Water :{planet.surface_water}</li>
    //              <li>Population :{planet.population}</li>
    //          </ul> 
            

    //      </div>
    // )
}

export default Planet;