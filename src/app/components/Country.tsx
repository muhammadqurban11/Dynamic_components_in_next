"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";
// import Home from "@/app/page"

interface CountryInfo {
  name: string;
  capital: string;
  population: number;
}


export default function CountryDetails({ infoCountry, link = "Country" }: { infoCountry?: CountryInfo; link?: string }) {
  const router = useRouter();
  function handleBack(){
    router.back();
  }
  return (
      <div style={{justifyItems: "center",}}>
        <Navbar/>
        <div>

            {infoCountry ? 
            (
                <div>
           <h1 style={{ border: "2px solid blue", width: "20%", borderRadius: "20px", padding: "4px", margin: "10px auto", textAlign: "center", backgroundColor:"lightgreen" }}> Country Name:{infoCountry.name}</h1>
           <h1 style={{ border: "2px solid blue", width: "20%", borderRadius: "20px", padding: "4px", margin: "10px auto", textAlign: "center", backgroundColor:"lightcoral" }}> Capital :{infoCountry.capital}</h1>
           <h1 style={{ border: "2px solid blue", width: "20%", borderRadius: "20px", padding: "4px", margin: "10px auto", textAlign: "center", backgroundColor:"lightblue" }}> Population : {infoCountry.population}</h1>
           <button onClick={handleBack} style={{ border: "2px solid blue", width: "20%", borderRadius: "20px", padding: "4px", margin: "10px auto", backgroundColor:"lightblue"} }>👈Back</button>
            </div>
            ) :  (
                <div>
                <div style={{ border: "2px solid blue", width: "20%", borderRadius: "8px", padding: "10px", margin: "5px auto", textAlign: "center", color: "white", backgroundColor:"maroon" }}>
                    {link} Not Found
                </div>
           <button onClick={handleBack} style={{ border: "2px solid blue", width: "20%", borderRadius: "20px", padding: "4px", margin: "10px auto", backgroundColor:"lightblue"} }>👈Back</button>
                
                </div>
                
            )     
        }   

           
        
        </div>
        {/* <Link href="country/Pakistan"style={{ margin: "100px",  borderRadius: "10px", border: "2px solid black", padding: "10px", backgroundColor: "olive" }}>Pakistan</Link>
        <Link href="country/India"style={{ margin: "80px",borderRadius: "10px", border: "2px solid black", padding: "15px", backgroundColor:"lightpink"}}>India</Link>
        <Link href="country/Japan"style={{ margin: "80px", borderRadius: "10px", border: "2px solid black", padding: "15px", backgroundColor: "gray"}}>Japan</Link>
        <Link href="country/America"style={{ margin: "80px", borderRadius: "10px", border: "2px solid black", padding: "15px", backgroundColor: "lightgreen"}}>America</Link>
        <Link href="country/Australia"style={{ margin: "80px", borderRadius: "10px", border: "2px solid black", padding: "15px", backgroundColor: "lightblue  "}}>Australia</Link>      */}
      </div>
    );
  }
