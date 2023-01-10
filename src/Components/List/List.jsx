import { useState, useContext } from 'react';
import { SettingsContext } from '../../Context/Settings/Settings';
import { Button, Pagination } from '@mantine/core';

const List = (props) => {
  
  // showCount is set to 3
  const { showCount, sortKey, showCompleted } = useContext(SettingsContext);
  
  let allTodos = props.list;

  // filtering completed items
  if (!showCompleted) {
    allTodos = allTodos.filter(todo => !todo.complete);
  }
  
  // variables used to handle the data displayed per page
  const [activePage, setPage] = useState(1);
  const totalPages = Math.ceil(allTodos.length / showCount);

  const startIndex = (activePage - 1) * showCount;
  const endIndex = startIndex + showCount;

  const pageData = allTodos.slice(startIndex, endIndex);

  return (
    <>
    {pageData.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => props.toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
        )
      )
    }
    <Pagination page={activePage} onChange={setPage} total={totalPages} color="dark"/>
    </>
  );
};


export default List;