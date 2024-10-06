import Image from "next/image";
import defaultprofile from "@/public/assets/images/cornell.png";

function TeamCard({ children, ...props }) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-xl">
        <div className="w-full">
            {props.image ? (
                <Image src = {props.image} alt = "profile" className="object-cover h-64 w-96"/>
            ) : (
                <Image className="w-16 h-16 rounded-full mx-auto" src = {defaultprofile} alt = "profile" />
            )}
        </div>
        <div className = "w-full px-6 pt-5 pb-5 flex justify-center flex-col items-center font-medium">
            <h7 className = "font-serif text-sm font-light">{props.role}</h7>
            <h4 className = "font-serif text-xl font-bold">{props.name}</h4>
            <p className = "orange_gradient text-center"> {props.description} </p>
        </div>
    </div>
    
  );
}

export default TeamCard;