import { useForm } from "../../../hooks/useForm";

export const AddComment = ({ onCommentsSubmit }) => {
  const { values, onChangeHandler, onSubmit } = useForm(
    {
      comment: "",
    },
    onCommentsSubmit
  );

  return (
    //   {/* <!-- Bonus --> */}
    //   {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
    <article className="create-comment">
      <label>Add new comment:</label>
      <form className="form" onSubmit={onSubmit}>
        <textarea
          name="comment"
          placeholder="Comment......"
          value={values.comment}
          onChange={onChangeHandler}
        ></textarea>
        <input className="btn submit" type="submit" value="Add Comment" />
      </form>
    </article>
  );
};
