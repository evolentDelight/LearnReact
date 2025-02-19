//Ternary Conditional Operator
// function Item({ name, isPacked }) {
//   return(
//     <li className="item">
//       {isPacked ? 
//       (
//         <del>
//           {name} + ' ✅'
//         </del>
//       ) : (
//       name
//       )}
//     </li>
//   )
// }

//Logical AND Operator &&
//  Keep left side of && Operator boolean to properly render the right side
// function Item({name, isPacked}){
//   return(
//     <li className="item">
//       {name} {isPacked && '✅'}
//     </li>
//   )
// }

//Conditionallly Assigning JSX to a variable
//  Most verbose but also most flexible
function Item({name, isPacked}){
  let itemContent = name;

  if(isPacked) itemContent = (
    <del>
      {name + " ✅"}
    </del>
    
  )

  return(
    <li className="item">
      {itemContent}
    </li>
  )
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}
