import { createAction, props } from "@ngrx/store";
import { Todo } from "../todo.model";

export const addTodo = createAction('[Todo Page] add todo', props<{content: string}>());
export const removeTodo = createAction('[Todo Page] remove todo', props<Todo>());
export const updateTodo = createAction('[Todo Page] update todo', props<Todo>());


export const loadTodos = createAction('[Todo Page] load todos');
export const loadTodosSuccess = createAction('[Todo API] load todos success');
export const loadTodosFailure = createAction('[Todo API] load todos failure');
