export function Profile(){
  return(
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  )
}

export default function Gallery(){
  return(
    <>
      <h3>Amazing Scientists (Who I don't know)</h3>
      <Profile/>
      <Profile/>
      <Profile/>
    </>
  )
}