import { useRef } from 'react';
import classes from './NewCommentForm.module.css';
import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api';

const NewCommentForm = (props) => {
  const { sendRequest } = useHttp(addComment);
  const commentTextRef = useRef();

  const submitFormHandler = async (event) => {
    event.preventDefault();
    // optional: Could validate here
    const commentText = commentTextRef.current.value;
    // send comment to server
    await sendRequest({ quoteId: props.id, commentText });
    props.onAddComment();
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
