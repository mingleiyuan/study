import { createReducer, on } from "@ngrx/store";
import { Todo } from "../todo.model";
import * as TodoActions from "./todo.actions";

export interface TodoState {
    todos: Todo[],
    error: string | null,
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialTodoState: TodoState = {
    todos: [],
    error: null,
    status: 'pending'
}

export const todoReducer = createReducer(
    initialTodoState,
    
    on(TodoActions.addTodo, (state, {content}) => ({ 
        ...state, 
        todos: [...state.todos, {
            id: Date.now().toString(), 
            content: content, 
            createEpoch: Date.now(), 
            updateEpoch: null, 
            version: 1
        }] 
    })),

    on(TodoActions.removeTodo, (state, {id}) => ({ 
        ...state, 
        todos: state.todos.filter(todo => todo.id !== id)
    })),
);
