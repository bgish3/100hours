import { Stack, Input, Button, useToast, Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';

function AddTodo({ addTodo }) {
  //toast is better looking alert
  const toast = useToast();
  const [todoList, setTodoList] = useState([]);
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    setValue(e.target.value);
  };
    const handleClick = a => {
      a.preventDefault();
    };

    const addTask = () => {
      setTodoList([...todoList, value]);

      const deleteTask = () => {};

      if (value === '') {
        alert('Enter text!');
      }
      const todo = {
        id: nanoid(),
        text: value,
    };

    addTodo(todo);
    setValue('');
  };
  return (
    <Box
      width="15rem"
      border="1px solid white"
      p="2rem"
      m="3rem"
      borderRadius="10px"
      h="30rem"
    >
      <form onSubmit={handleClick}>
        <Stack spacing={5}>
          <Input
            mt={5}
            value={value}
            variant="outline"
            type="text"
            placeholder="Enter task name..."
            onChange={e => setValue(e.target.value)}
          />
          <Input
            mt={5}
            value={value}
            variant="outline"
            type="text"
            placeholder="Enter your task..."
            onChange={e => setValue(e.target.value)}
          />
        </Stack>
        <Box display="flex" flexDirection="column" mt="17rem">
          <Button onClick={addTask} backgroundColor="green.300" type="submit">
            Confirm
          </Button>
        </Box>
      </form>
      <div>
        {todoList.map(task => {
          return (
            <div>
              <h1>{task}</h1>
              <button>X</button>
            </div>
          );
        })}
      </div>
    </Box>
  );
}

export default AddTodo;
