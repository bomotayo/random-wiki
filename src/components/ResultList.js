import React from 'react';
import ResultItem from './ResultItem';

//Result List receives list prop from App and then maps(renderedList function). 
//Each element is passed to the ResultItem component as a prop.

const ResultList = (props) => {
  const renderedList = props.list.map( list => {
    return <ResultItem  key={list.pageid} list={list} />
  });

    return(
      <div className='ui relaxed divided list'>
        {renderedList}
      </div>
    )

}

export default ResultList;