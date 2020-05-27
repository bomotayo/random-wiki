import React from 'react';

//Result Item receives list prop that is from ResultList map. 
const ResultItem = (props) => {
  

  //Returns card with Title & Snippet
  return(
    <div className="ui cards">
      <a className="card card-sec" rel="noopener noreferrer" href={`https://en.wikipedia.org/?curid=${props.list.pageid}`}  target="_blank">
        <div className="content">
              <div className="header">{props.list.title}</div>
                  {props.list.snippet.replace(/<\/?[^>]+(>|$)/g,'').replace(/\..*/,'.')}
        </div>
        </a>
    </div>
  )
}



export default ResultItem;