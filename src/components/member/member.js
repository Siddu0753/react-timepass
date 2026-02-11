import "./Member.css"
export function Member(props){
    // console.log(props.name)
    const {name,city}=props;
   
    return(
        <div className="memberCard" >
            <h1>{name}</h1>
            <p className="member-sub">{city}</p>
        </div>
    )

}
export default Member;