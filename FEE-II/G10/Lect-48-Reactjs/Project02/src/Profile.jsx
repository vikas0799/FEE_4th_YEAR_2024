import React from "react";
import './Profile.css'

function Profile(props) {
  let arr = props.array;
  console.log(arr);
  return (
    <>
      <h1>profile component</h1>
      {
         arr.map((value,idx) => {
         return (
          <div className="box" key={idx}>
             <div className="boxin">
             profile data
             {idx}
            {value.name}
            {value.batch}
            {value.college}
            {value.age}
             </div>
            {
                <img src={value.image} alt=""  id="img"/>
            }
          </div>
         );
        })
      }
    </>
  );
}

export default Profile;
