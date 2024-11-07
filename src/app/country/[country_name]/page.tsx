// import Navbar from "@/app/components/Navbar";
// import Link from 'next/link'

import CountryDetails from "@/app/components/Country";


export default function CountryName({params}: {params:{country_name: string} }) {

    const world_countries: {
        name: string;
        capital: string;
        population: number;

    }[] = [
        {
        name: "pakistan",
        capital: "Islamabad",
        population: 255022240
        },
        {
        name: "india",
        capital: "New Delhi",
        population: 6661719289389
        },
        {
        name: "china",
        capital: "Beijing",
        population: 121923102978
        },
        {
            name: "Japan",
            capital: "Tokyo",
            population: 231297177
        },
        {
            name: "America",
            capital: "Wasington",
            population: 1231231313418797
        },
        {
            name: "Australia",
            capital: "Cairo",
            population: 5698798780967
            },
]
    
    

    function filterCountry (country_url:string){
        return world_countries.find(country => country.name.toLowerCase() == country_url.toLowerCase())
    }

    const result = filterCountry(params.country_name);


    return (
    //   <div>
    //     <Navbar/>
    //     { result ? (
    //         <>
    //          <h2 style={{ border: "2px solid blue", width: "20%", borderRadius: "8px", padding: "4px", margin: "10px auto", textAlign: "center", backgroundColor:"lightgreen" }}>Country Name : {result.name}</h2>
    //          <h2 style={{ border: "2px solid blue", width: "20%", borderRadius: "8px", padding: "4px", margin: "10px auto", textAlign: "center", backgroundColor:"lightcoral" }}>Country Capital: {result.capital}</h2>
    //          <h2 style={{ border: "2px solid blue", width: "20%", borderRadius: "8px", padding: "4px", margin: "10px auto", textAlign: "center", backgroundColor:"lightblue" }}>Country Population:{result.population} </h2>
    //          </>

    //     ) : (
    //         <h2 style={{textAlign: 'center', color: "white", border: "2px solid black", width: "20%", borderRadius: "10px", padding: "4px", margin: "10px auto", backgroundColor: "gray"}} >{params.country_name} Not Found </h2>
    //     )}
       
    //   </div>
    <div>
        <CountryDetails infoCountry={result} link= {params.country_name}/>
    </div>
    );
  }