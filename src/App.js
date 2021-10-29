import store from "./store";
import {addItemAction, changeAction, deleteAction, getList} from "./store/actionCreaters";
import TodoListUi from "./TodoListUI";
import {Component} from "react";

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
        store.dispatch(getList())
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
