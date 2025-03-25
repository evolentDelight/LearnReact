import FirstGoal from "./FirstGoal.jsx"
import SecondGoal from "./SecondGoal.jsx"
import ThirdGoal from "./ThirdGoal.jsx"

export default function GoalList(){
  return(
    <main>
      <ul>
        <FirstGoal/>
        <SecondGoal/>
        <ThirdGoal/>
      </ul>
    </main>
  )
}