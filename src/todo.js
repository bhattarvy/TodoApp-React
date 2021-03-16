

const Todo = (props) =>{

    
    let todos = props.todo
    let deletetodo = props.deletetodo
    console.log(todos)
    
    console.log(todos.length)
    if(todos.length) {

        let uitodolist = todos.map((todo)=>{
            
            return(
            <div className="todo-content" onClick={()=>{deletetodo(todo.id)}}>
                {todo.content}
            </div>
            )

        })
        return (
            <div className="Todo">
                {uitodolist}
            </div>
        )
    } 
    else{
        return (
            <div className="Todo">
                <h1>Yeah dont have anything todo</h1>
            </div>
        )
    }

}
 
export default Todo