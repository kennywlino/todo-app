import React, { useEffect, useState } from 'react';
import List from '../List/List';
import useForm from '../../hooks/form.js';
import { Button, Card, createStyles, Grid, Slider, Text, TextInput } from '@mantine/core';

import { v4 as uuid } from 'uuid';
import axios from 'axios';

const useStyles = createStyles((theme) => ({
  h1: {
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.gray[0],
    width: '80%',
    margin: 'auto',
    fontSize: theme.fontSizes.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.md,
  }
}));


const ToDo = () => {

  const { classes } = useStyles();

  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);
  const [crudAction, setCrudAction] = useState('');

  useEffect(() => {    
    async function fetchTodos() {
    let config = {
      url:'/api/v1/todo',
      baseURL: 'https://api-js401.herokuapp.com',
      method: 'GET',
    }
    const response = await axios(config);
    setList(response.data.results);
    }
    fetchTodos();
  },[]);

  useEffect(() => {
    switch(crudAction) {
      case 'add':
        async function addTodos() {
          let config = {
            url:'/api/v1/todo',
            baseURL: 'https://api-js401.herokuapp.com',
            method: 'POST',
            // data: item
          }
          // how do we decide what to add? 
          // filter between what's new and what isn't?
          const response = await axios(config);
        }
        addTodos();
        break;
      case 'update':
      break;
      case 'delete':
      break;
      default:
    }
  }, [list, crudAction]);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
    setCrudAction('add');
  }

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map( item => {
      if ( item.id === id ) {
        item.complete = ! item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily. 
    // disable code used to avoid linter warning 
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [list]);  

  return (
    <>
      <header data-testid="todo-header">
        <h1 data-testid="todo-h1" className={classes.h1}>To Do List: {incomplete} items pending</h1>
      </header>


      <Grid style={{ width: '80%', margin: 'auto' }}>
        <Grid.Col xs={12} sm={4}>
          <Card withBorder>
            <form onSubmit={handleSubmit}>
              <h2>Add To Do Item</h2>
              <TextInput
                name="text"
                placeholder="Item Details"
                onChange={handleChange}
                label="To Do Item"
              />
              <TextInput
                name="assignee"
                placeholder="Assignee Name"
                onChange={handleChange}
                label="Assigned To"
              />
              <Text>Difficulty</Text>
              <Slider
                name="difficulty"
                onChange={handleChange}
                min={1}
                max={5}
                step={1}
                defaultValue={defaultValues.difficulty}
              />
              <Button type="submit">Add Item</Button>
            </form>
          </Card>
        </Grid.Col>
        <Grid.Col xs={12} sm={8}>
          <List list={list} toggleComplete={toggleComplete} deleteItem={deleteItem} />
        </Grid.Col>
      </Grid>
    </>
  );
};

export default ToDo;
