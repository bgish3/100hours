import { Stack, Input, Button, useToast, Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';

function AddTodo({ addTodo }) {
  const toast = useToast();
  const [value, setValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (value === '') {
      toast({
        title: 'Please enter text.',
        status: 'warning',
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    const todo = {
      id: nanoid(),
      text: value,
    };

    addTodo(todo);
    setValue('');
  }
  return (
    <Box display="flex" flexDirection="column" justifyContent="flex-end">
      <form onSubmit={handleSubmit}>
        <Stack spacing={5}>
          <Input
            mt={5}
            value={value}
            variant="outline"
            type="text"
            placeholder="Enter your task..."
            onChange={e => setValue(e.target.value)}
          />
        </Stack>
      </form>
      <Box>
        <Button backgroundColor="green.300" type="submit">
          Confirm
        </Button>
      </Box>
    </Box>
  );
}

export default AddTodo;
