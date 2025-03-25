import GoalItem from "./GoalItem.jsx"

export default function GoalList(){
  return(
    <main>
      <ul>
        <GoalItem id="g1">Learn the Fundamentals</GoalItem>
        <GoalItem id="g2">Achieve mastery in React And React's JavaScript</GoalItem>
        <GoalItem id="g3">Build all React apps with ease or fluently</GoalItem>
      </ul>
    </main>
  )
}