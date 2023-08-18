function Tasks(props) {
    return props.tasks.map((todoItem, index) => {
        return (
            <div key={index}>
                <span>{todoItem.text}</span>
                <input
                    onChange={(event) =>
                        props.handleUpdate(index, event.target.checked)
                    }
                    type="checkbox"
                    checked={todoItem.checked}
                />
                <small onClick={() => props.handleDelete(index)}>Delete</small>
            </div>
        )
    })
}

export default Tasks