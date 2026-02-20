//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Imports from React 
import React, { useState } from "react";
import { Link } from "react-router-dom";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Imports from React Bootstrap 
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { OverlayTrigger, Tooltip, Button, Modal } from "react-bootstrap";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Internal Imports 
import styles from "../../styles/CommentsCreateEditForm.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefault";
import btnStyles from "../../styles/Button.module.css"

function CommentCreateForm(props) {
  const { 
    article, 
    setArticle, 
    setComments, 
    profileImage, 
    profile_id, 
    article_owner
  } = props;
  
  const [content, setContent] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (event) => {
    if (!article_owner) {
      setContent(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    showModalHandler();
    try {
      const { data } = await axiosRes.post("/comments/", {
        content,
        article,
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      setArticle((prevArticle) => ({
        results: [
          {
            ...prevArticle.results[0],
            comments_count: prevArticle.results[0].comments_count + 1,
          },
        ],
      }));
      setContent("");
    } catch (err) {
      // Error creating comment
    }
  };

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className={`${styles.CommentForm} mt-4`}>
        <Form.Group>
          <InputGroup>
            <Link to={`/profiles/${profile_id}`}>
              <Avatar src={profileImage} height={40} />
            </Link>
            {article_owner ? (
              <OverlayTrigger 
                placement="top"
                overlay={<Tooltip>You can&apos;t comment on your own post!</Tooltip>}
              >
                <Form.Control
                  className={styles.Form}
                  placeholder="Add Your Comment"
                  as="textarea"
                  value={content}
                  onChange={handleChange}
                  rows={1}
                  disabled
                />
              </OverlayTrigger>
            ) : (
              <Form.Control
                className={styles.Form}
                placeholder="Add Your Comment"
                as="textarea"
                value={content}
                onChange={handleChange}
                rows={1}
              />
            )}
          </InputGroup>
        </Form.Group>
        <button
          className={`${btnStyles.Button} ${styles.Button} btn d-block ml-auto`}
          disabled={!content.trim()}
          type="submit"
        >
          <i className="fa fa-paper-plane" aria-hidden="true"></i>
        </button>
      </Form>

      <Modal show={showModal} onHide={hideModalHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Comment Submitted Successfully</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your comment will be displayed after approval from the admin.</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={hideModalHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CommentCreateForm;
