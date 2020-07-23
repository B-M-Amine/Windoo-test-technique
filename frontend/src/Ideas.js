import React, { useState, useEffect } from "react";
import './Ideas.css'
import Idea from './Idea'
import Sort from './Sort'



const Ideas = () => {
  const [hasError, setErrors] = useState(false);
  const [ideas, setIdeas] = useState({});
  
  
  async function fetchData() {
    const res = await fetch("http://127.0.0.1:8000/api/idea");
    res
      .json()
      .then(res => setIdeas(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  },[]);

  function scoreSort(){
    if(sort === "score-asc"){
      sort = "score-desc";
    }else{
      sort = "score-asc";
    }
  }

  function dateSort(){
    if(sort === "date-asc"){
      sort = "date-desc";
    }else{
      sort = "date-asc";
    }
  }


  let data = Object.values(ideas);
  let sort = "";



  return (
    <div>
      <button type="button" onClick={scoreSort}>Sort by score</button>
      <button type="button" onClick={dateSort}>Sort by date</button>

      <Sort by={sort}>
    {data.map((idea) => (
       <Idea id={idea.id} 
             title={idea.title}
             createdAt={idea.createdAt} 
             author={idea.author}
             score={idea.score}
             key={idea.id}
             />
      
    ))}
    </Sort>
    </div>
  );
};
export default Ideas;