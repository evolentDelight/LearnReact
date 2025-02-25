import { people } from "./components/data"
import { getImageUrl } from "./components/utils"

function List(){
  //const chemists = people.filter(person => person.profession === 'chemist');

  const listItems = people.map(person =>
    <li key={person.id}>
      <img src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  )

  return <ul>{listItems}</ul>
}

export default function App(){
  return(
    <>
      <List/>
    </>
  )
}