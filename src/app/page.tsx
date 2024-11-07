
import Link from "next/link";
import Navbar from "@/app/components/Navbar"

export default function Home() {
  return (
    <div style={{justifyItems: "center",}}>
      <Navbar/>
      <Link href="country/Pakistan"style={{ margin: "100px",  borderRadius: "10px", border: "2px solid black", padding: "10px", backgroundColor: "olive" }}>Pakistan</Link>
      <Link href="country/India"style={{ margin: "80px",borderRadius: "10px", border: "2px solid black", padding: "15px", backgroundColor:"lightpink"}}>India</Link>
      <Link href="country/Japan"style={{ margin: "80px", borderRadius: "10px", border: "2px solid black", padding: "15px", backgroundColor: "gray"}}>Japan</Link>
      <Link href="country/America"style={{ margin: "80px", borderRadius: "10px", border: "2px solid black", padding: "15px", backgroundColor: "lightgreen"}}>America</Link>
      <Link href="country/Australia"style={{ margin: "80px", borderRadius: "10px", border: "2px solid black", padding: "15px", backgroundColor: "lightblue  "}}>Australia</Link>     
    </div>
  );
}
