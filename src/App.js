import store from "./store";
import {addItemAction, changeAction, deleteAction, getListAction} from "./store/actionCreaters";
import TodoListUi from "./TodoListUI";
import {Component} from "react";
import axios from "axios";

class App extends Component{

    constructor(props) {
        super(props);

        this.state = store.getState()
    }

    setInputValue(e) {
        let action = changeAction(e.target.value);
        store.dispatch(action);
    }


    addValue() {
        let action = addItemAction()
        store.dispatch(action)
    }

    deleteItem(index) {
        let action = deleteAction(index)
        store.dispatch(action)
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:4523/mock/389130/list").then(res=>{
            let action = getListAction(res.data.data.list);
            console.log(action)
            store.dispatch(action)
        })
    }

    render() {
        return (
            <TodoListUi
                setInputValue={this.setInputValue}
                inputValue = {this.state.inputValue}
                addValue = {this.addValue}
                deleteItem={(index)=>this.deleteItem(index)}
                list = {this.state.list}
            />
        );
    }
}

export default App;
