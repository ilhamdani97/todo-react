export interface TodoListResponse {
    todos: Todos[];
}

export interface Todos {
    todo: string;
    completed: boolean;
}