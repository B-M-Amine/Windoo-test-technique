import React from 'react'
import PropTypes from 'prop-types'
import './Idea.css'
import Moment from 'react-moment';


const Idea = ({id, title, createdAt, author, score }) => (
    <div className="idea">
        <p><span className = "idea-info">Idea n° : </span> {id}</p>
        <p><span className = "idea-info">Title : </span> {title}</p>
        <p><span className = "idea-info">Created at : </span> <Moment format="YYYY/MM/DD">{createdAt}</Moment></p>
        <p><span className = "idea-info">Author : </span> {author}</p>
        <p><span className = "idea-info">Score : </span> {score}</p>
   </div>
  )

  

export default Idea
