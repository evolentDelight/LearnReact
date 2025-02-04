const today = new Date();

function formatDate(date){
  return new Intl.DateTimeFormat(
    'en-US',
    {weekday: 'long'}
  ).format(date);
}

const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: 'black',
    color: "lightskyblue"
  }
}

export default function TodoList(){
  return(
    <>
      <h1>{person.name}'s To Do List for {formatDate(today)}</h1>

      <ul
        style={person.theme}
      >
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </>
  )
}