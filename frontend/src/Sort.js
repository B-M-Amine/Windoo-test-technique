import React from 'react';

const scoreAsc =(a, b) => {
    
    return a.props.score - b.props.score;

  }

  const scoreDesc =(a, b) => {
    
    return b.props.score - a.props.score;

  }

  const dateAsc =(a, b) => {
    
    var d1 = Date.parse(a.props.createdAt);
    var d2 = Date.parse(b.props.createdAt);

    if(d1 > d2){return 1;}
    else{
        return -1;
    }
  }

  const dateDesc =(a, b) => {
    
    var d1 = Date.parse(a.props.createdAt);
    var d2 = Date.parse(b.props.createdAt);

    if(d1 < d2){return 1;}
    else{
        return -1;
    }

  }

const Sort= ({children, by})=> {
if (!by) {
return children
}
if(by === "score-asc"){
return React.Children.toArray(children).sort(scoreAsc)
}
if(by === "score-desc"){
    return React.Children.toArray(children).sort(scoreDesc)
    }
if(by === "date-asc"){
    return React.Children.toArray(children).sort(dateAsc)
        }
if(by === "date-desc"){
            return React.Children.toArray(children).sort(dateDesc)
        }


}

export default Sort
