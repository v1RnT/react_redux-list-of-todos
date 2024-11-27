import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../types/Todo';

const initialState: Todo[] = [];

export const todosSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    setTodos: (_state, action: PayloadAction<Todo[]>) => action.payload,
  },
});
