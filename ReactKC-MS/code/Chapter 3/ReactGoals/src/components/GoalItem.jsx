export default function GoalItem({id, children}){
  return(
    <li id={id}>
      <h2>{children}</h2>
    </li>
  )
}