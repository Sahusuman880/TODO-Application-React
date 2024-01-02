import { MdDelete } from "react-icons/md";
function TodoItem1(props) {
  return (
    <div className="container ">
      {props.todo.map((element, index) => {
        return (
          <>
            <div className="row kg-row">
              <div className="col-6">{element.name}</div>
              <div className="col-4">{element.dueDate}</div>
              <div className="col-2">
                <button
                  type="button"
                  className="btn btn-danger kg-button"
                  onClick={() => props.deleteItem(index)}
                >
                  <MdDelete />
                </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
export default TodoItem1;
