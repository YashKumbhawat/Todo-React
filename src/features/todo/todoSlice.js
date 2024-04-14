import {createSlice,nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos:[],
    count:0,
    complete:[],
    right:0,
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{

        addTodo: (state,action) => {
            const todo = {
                id:nanoid(),
                text: action.payload,
                status: false,
            }
            state.todos.push(todo);
            state.count++;
        },

        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo) => (todo.id!==action.payload));
            state.count--;
            let len = state.complete.length;
            state.complete = state.complete.filter((todo) => (todo.id!==action.payload));
            if(len!==state.complete.length){
                state.right--;
            }
        },

        updateTodo: (state,action) => {
            state.todos = state.todos.map((todo) => {
                if(todo.id===action.payload.id){
                    todo.text = action.payload.text;
                }
            })
        },
        completeTodo: (state,action) => {
            // let len = state.complete.length;
            // let check = false;
            // state.complete.map((todo) => {
            //     if(todo.id===action.payload.id){
            //         check = true;
            //     }
            // })
            // if(len===0 || !check){
            //     state.todos = state.todos.map((todo) => {
            //       if(todo.id===action.payload.id){
            //         todo.status = true
            //       }  
            //     })
            //     const completed = {
            //         id : action.payload.id,
            //         value: true,
            //     }
            //     state.complete.push(completed);
            //     state.right++;
            // }
            const todoId = action.payload.id;
            const isTodoAlreadyCompleted = state.complete.some(todo => todo.id === todoId);

            if (!isTodoAlreadyCompleted) {
                state.todos = state.todos.map(todo => {
                if (todo.id === todoId) {
                    return { ...todo, status: true }; // Update status to true for completed todo
                }
                return todo;
            });

            state.complete.push({ id: todoId }); // Add completed todo ID to complete array
            state.right++; // Increment the count of completed todos
            }
        }
    }
})

export const {addTodo,removeTodo,updateTodo,completeTodo} = todoSlice.actions;
export default todoSlice.reducer;