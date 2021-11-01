
function Count({ count }) {

  const feedback = count >= 10 ? "Can't go higher than 10!" 
  : count <= 0 ? "Can't go less than 0!" 
  : "Keep counting...";

  return (
    <div>
      <h1>{count}</h1>
      <p>{feedback}</p>
    </div>
    
    
  )
}

export default Count;