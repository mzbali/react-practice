import { useEffect, useState } from 'react';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentsList from './CommentsList';

const Comments = (props) => {
  const {
    sendRequest,
    status,
    data: allComments,
    error,
  } = useHttp(getAllComments, true);
  const [isAddingComment, setIsAddingComment] = useState(false);

  useEffect(() => {
    sendRequest(props.quoteId);
  }, [sendRequest, props.quoteId]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addCommentHandler = async () => {
    await sendRequest(props.quoteId);
    setIsAddingComment(false);
  };
  let comments = <p>Comments...</p>;
  if (status === 'pending') {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  } else if (error) {
    comments = <p className="centered">{error}</p>;
  } else if (allComments.length === 0) {
    comments = <p className="centered">No comments for this quotes.</p>;
  } else {
    comments = <CommentsList comments={allComments} />;
  }
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm onAddComment={addCommentHandler} id={props.quoteId} />
      )}
      {comments}
    </section>
  );
};

export default Comments;
