
import './App.css';


function App() {
  const title = 'udemy react cours'

  const arrayComments = [
    {id:1 , text:'comment one'},
    {id:2 , text:'comment two'},
    {id:3 , text:'comment tree'},
  ]

  const comments = true

  const comPragraph = (
    <div>
      <h3>comments ({arrayComments.length})</h3>
      <ul>
      {arrayComments.map((comment,index)=> (
          <li key={index} className='animate-pulse'>{comment.text}</li>
      ))}
      </ul>
     

    </div>
  )
  
  
  return (
    <div className="app text text-center ">
      <h1>{title.toUpperCase()}</h1>

      {comments? comPragraph  : 'no'}


    </div>
  );
}

export default App;
