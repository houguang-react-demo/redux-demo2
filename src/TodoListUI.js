const TodoListUi = (props)=>{
    return (
        <div className="App">
            <input type="text"
                   placeholder={props.inputValue}
                   onChange={props.setInputValue}
                   value={props.inputValue}
            />
            <button onClick={props.addValue}>增加</button>
            <ul>
                {props.list.map((item,index)=>(
                    <li key={index}>{item}
                        <button onClick={()=>props.deleteItem(index)}>删除</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoListUi;