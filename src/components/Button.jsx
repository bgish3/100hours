import { Button } from '@chakra-ui/react';

const CreateTaskButton = ({ text, buttonColor }) => {
  return <Button backgroundColor={buttonColor}>{text}</Button>;
};

export default CreateTaskButton;
