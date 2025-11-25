import React from "react";
import { Typography } from "@mui/material";

const Chapter_2: React.FC = () => {
  const person = {
    name: "Vishnu",
    native: "Kollapatti",
    age: 23,
    parent: {
      father: "Venkat",
      mother: "Chithra",
    },
    personDetail() {
      return `${this.name} from ${this.native}`;
    },
  };

  // Object merging
  const personDetail = {
    yearOfBirth() {
      return new Date().getFullYear() - this.age;
    },
    color: "blue",
    favNum :[1,2,3,6,6],
    get favNumCount(){
      return this.favNum.length
    }
  };
console.log("person Details ",personDetail)
  // Merge the new properties/methods into 'person'
  Object.assign(person, personDetail);
  // modern approch
  const allData = { ...person, ...personDetail };

  console.log("allData", allData);

  // delete
  delete person.age;

  function personName(firstName:any, lastName:any) {
    return {firstName, lastName}
  }
  personName("vishnu", "venkat");
  return (
    <div>
      <Typography variant="h6">Chapter 2: JavaScript Objects</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        Name: {person.name} <br />
        Age: {person.age} <br />
        Parent (Father): {person.parent.father} <br />
        Details: {person.personDetail()} <br />
        Year of Birth: {person.yearOfBirth()}
{personDetail.favNumCount}
        {/* {personName("vishnu", "venkat")} */}
      </Typography>
    </div>
  );
};

export default Chapter_2;
