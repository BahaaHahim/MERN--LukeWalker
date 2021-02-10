import React from 'react'
import  {useState} from 'react'
import { Router, Link, navigate } from '@reach/router';

const Components =(props)=>{
    const [resource, setResource] = useState("people");
    const [theId, setTheId] = useState(0);

    const HandleSubmit = (e) =>{
        e.preventDefault();
        resource.toLowerCase() === "people"?navigate("/people/"+theId):navigate("/planets/"+theId);
    }

    return(
        <>
            <form onSubmit={(e) => HandleSubmit(e)}>
                <select name={"field"} onChange={(e) => setResource(e.target.value)}>
                    <option value={"people"}>People</option>
                    <option value={"planets"}>Planets</option>
                </select>
                <input type={"number"} name={"theId"}  onChange={(e)=>setTheId(e.target.value)}/>
                <input type={"submit"} value={"Search"}/>
            </form>
        </>
    );

    // const searchHandler =(e)=> {
    //     setSearchFor(e.target.value);
    // }
    // const idHandler= (e) =>{
    //     setid(e.target.value);
    // }

    
    // return (
        
    //     <div>
    //         <div>
    //                 <label>Search for: </label>
    //                 <select value={SearchFor} onChange={searchHandler}>
    //                     <option value="people">People</option>
    //                     <option value="planets">Planets</option>
    //                 </select>
    //             </div>
    //             <div>
    //                 <label>ID: </label>
    //                 <input type="number" value={id} onChange={idHandler} />
    //             </div>
    //             <Link to={'/${SearchFor}/${id}'}>Search</Link>
            

            
    //     </div>
    // )
}

export default Components
