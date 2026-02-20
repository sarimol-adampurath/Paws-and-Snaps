//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Imports from React 
import React, { useState } from "react";
import { Link } from "react-router-dom";
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Imports from ReactBootstrap 
import { OverlayTrigger, Tooltip } from "react-bootstrap";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Internal Imports 
import Avatar from "../../components/Avatar";
import CommentEditForm from "./CommentsEditForm";
import styles from "../../styles/Comment.module.css";
import { MoreDropdown } from '../../components/MoreDropdown';
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefault";

const Comment = (props) => {
  const {
    profile_id,
    profile_image,
    owner,
    updated_at,
    content,
    likes_count,
    like_id,
    id,
    setArticle,
    setComments,
  } = props;

  const [showEditForm, setShowEditForm] = useState(false);
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/comments/${id}`);
      setArticle((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count - 1,
          },
        ],
      }));

      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
    } catch (err) {
      // Error deleting comment
    }
  };

  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { comment: id });
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? { ...comment, likes_count: comment.likes_count + 1, like_id: data.id }
            : comment;
        }),
      }));
    } catch (err) {
      // Error liking comment
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}/`);
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? { ...comment, likes_count: comment.likes_count - 1, like_id: null }
            : comment;
        }),
      }));
    } catch (err) {
      // Error unliking comment
    }
  };

  return (
    <div className={styles.Comment}>
      <div className={styles.OwnerDetails}>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} height={70} />
        </Link>
        <div className={styles.NameAndTime}>
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
        </div>
      </div>
      <div className={styles.CommentBody}>
        <div className={styles.CommentContent}>
          {showEditForm ? (
            <CommentEditForm
              id={id}
              profile_id={profile_id}
              content={content}
              profileImage={profile_image}
              setComments={setComments}
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <p>{content}</p>
          )}
        </div>
        <div className={styles.CommentDropDown}>
          {is_owner && !showEditForm && (
            <MoreDropdown
              handleEdit={() => setShowEditForm(true)}
              handleDelete={handleDelete}
            />
          )}
        </div>
      </div>
      <div className={styles.CommentLike}>
        {is_owner ? (
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>You can&apos;t like your own comment!</Tooltip>}
          >
            <i className="fa fa-thumbs-up" aria-hidden="true"></i>
          </OverlayTrigger>
        ) : like_id ? (
          <span
            className={`${styles.thumbsUp}`}
            onClick={handleUnlike}
          >
            <i className="fa fa-thumbs-up" aria-hidden="true"></i>
          </span>
        ) : currentUser ? (
          <span
            className={`${styles.thumbsUp}`}
            onClick={handleLike}
          >
            <i className="fa fa-thumbs-up" aria-hidden="true"></i>
          </span>
        ) : (
          null
        )}
        <p>{likes_count} likes</p>
      </div>
    </div>
  );
};

export default Comment;
