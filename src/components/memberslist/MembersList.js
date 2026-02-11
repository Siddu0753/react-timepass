import "./MembersList.css";
import {Member} from "../member/member";
import StyledButton from "../styledButton/StyledButton";
import { useState } from "react";
import Confetti from 'react-confetti'

const data = [
  { name: "Satya Narayana", city: "Rajahmundry" },
  { name: "Anusha", city: "Kakinada" },
  { name: "Vamsi Krishna", city: "Hyderabad" },
  { name: "Pooja Sharma", city: "Jaipur" },
  { name: "Rohit Verma", city: "Indore" },
  { name: "Sneha Patil", city: "Nagpur" },
  { name: "Akhil Reddy", city: "Warangal" },
  { name: "Divya Iyer", city: "Chennai" },
  { name: "Rahul Mehta", city: "Ahmedabad" },
  { name: "Neha Kapoor", city: "Delhi" },
  { name: "Karthik", city: "Bengaluru" },
  { name: "Meghana", city: "Mysuru" },
  { name: "Suresh Kumar", city: "Coimbatore" },
  { name: "Anjali Singh", city: "Lucknow" },
  { name: "Ravi Teja", city: "Vijayawada" },
  { name: "Nikhil Jain", city: "Udaipur" },
  { name: "Priyanka Das", city: "Bhubaneswar" },
  { name: "Arjun Malhotra", city: "Chandigarh" },
  { name: "Kiran Rao", city: "Visakhapatnam" },
  { name: "Swathi", city: "Tirupati" },
  { name: "Manoj Yadav", city: "Patna" },
  { name: "Shalini Gupta", city: "Noida" },
  { name: "Harsha", city: "Guntur" },
  { name: "Aishwarya Nair", city: "Kochi" },
  { name: "Siddharth", city: "Pune" }
];



function MembersList() {
    const[luckyperson,setluckyperson]=useState("")
    const[isLoading,setLoading]=useState(false);
    const[showCelebration,setShowCelebration]=useState(false)

    function pickPerson(){
        setLoading(true)
      
        const randomNumber=Math.floor(Math.random()*data.length);
        const person=data[randomNumber];
        const luckymessage=`${person.name} from ${person.city} `;

        setTimeout(function(){
                setluckyperson(luckymessage);
                setLoading(false);
                setShowCelebration(true);

                
        },5000);

        
    }
    return ( 
        <>
        
        {showCelebration && <Confetti/>}
        <div className="members-container">
        {data.map(function(member){
                return <Member name={member.name} city={member.city}/>
            })}       
        
        </div>
        <div className="flex-center">
            {isLoading && <h3>Loading....</h3>}
            
            <h2>
                {luckyperson}
            </h2>
            <StyledButton text="Lucky Draw" onClick={pickPerson}/>
        </div>
        
        {/* <StyledButton text="Submit"/> */}
        </>
     );
}

export default MembersList;