import Hobby from './Hobby'

function HoppyList() {

  const hobbies = ["Surfing", "Rock climbing", "Mountain biking", "Breakdancing"];
  
  return(
    <ul>
      {hobbies.map(hobby => (
        <li key={hobby}>
          <Hobby hobby={hobby} />
        </li>
      ))}
    </ul>
  )
}

export default HoppyList;