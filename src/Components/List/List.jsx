import { useState, useContext } from 'react';
import { SettingsContext } from '../../Context/Settings/Settings';
import { Card, CloseButton, Flex, Pagination } from '@mantine/core';
import Auth from '../Auth';

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
        <Card withBorder key={item.id}>
          <Flex
            justify="flex-end"
          >
            <CloseButton title="Delete Todo" onClick={() => props.deleteItem(item.id)}/>
          </Flex>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <Auth capability="update">
            <div onClick={() => props.toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          </Auth>
          <hr />
        </Card>
        )
      )
    }
    <Pagination page={activePage} onChange={setPage} total={totalPages} color="dark"/>
    </>
  );
};


export default List;