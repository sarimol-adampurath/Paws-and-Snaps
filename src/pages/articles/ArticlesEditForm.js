//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Imports from React bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Imports from React
import React, { useRef, useState,useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefault";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Import of third party library React quill and its styles
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Internal imports
import Asset from "../../components/Assets";
import Upload from "../../assets/upload.png";
import styles from "../../styles/ArticleCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useRedirect } from "../../hooks/useRedirect";


function ArticleEditForm() {
  useRedirect('loggedOut');

  const [errors, setErrors] = useState({});
  const [articleData, setArticleData] = useState({
    title: "",
    article: "",
    image: "",
    category: "",
    published: false,

  });
  const { title, article, image,category ,published} = articleData;
  const imageInput = useRef(null);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/articles/${id}`);
        const { title, article, image, category,is_owner, published } = data;

        is_owner ? setArticleData({ title, article, image, category ,published}) : history.push("/intro");
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [history, id]);

  const handleChange = (event) => {
    setArticleData({
      ...articleData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setArticleData({
        ...articleData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleArticleChange = (value) => {
    setArticleData({
      ...articleData,
      article: value,
    });
  };
  const handleCheckboxChange = (event) => {
    setArticleData({
      ...articleData,
      published: event.target.checked,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("article", article);
    if (imageInput.current.files[0]) {
      formData.append("image", imageInput.current.files[0]);
    }
    formData.append("category", category);
    formData.append("published", published);


    try {
      const { data } = await axiosReq.put(`/articles/${id}`, formData);

      if(published){
          history.push(`/articles/${data.id}`);
      } else {
        history.push("/articles");
      }
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center">
      {/* Title */}
      <Form.Group>
        <Form.Label className={styles.label}>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          className={styles.Title}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      {/* Content */}
      <Form.Group>
        <Form.Label className={styles.label}>Content</Form.Label>
        <ReactQuill
          theme="snow"
          value={article}
          className={styles.quillEditor}
          onChange={handleArticleChange}
        />
      </Form.Group>
      {errors?.article?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      {/* Category */}
      <Form.Group controlId="category">
        <Form.Label className={styles.label}>Category</Form.Label>
        <Form.Control
          className={styles.Category}
          name="category"
          as="select"
          defaultValue="Please select a category"
          onChange={handleChange}
        >
          <option value="select">Please select a category</option>
          <option value="dogs">Dogs</option>
          <option value="cats">Cats</option>
          <option value="fishes">Fishes</option>
          <option value="horses">Horses</option>
          <option value="birds">Birds</option>
          <option value="training">Training</option>
          <option value="wellness">Wellness</option>
          <option value="adoption">Adoption</option>
          <option value="other">Other</option>
        </Form.Control>
      </Form.Group>
      {errors.category?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
       {/* Checkbox for publication status */}
       <Form.Group controlId="published">
          <Form.Check
            type="checkbox"
            label="Publish this article"
            checked={published}
            onChange={handleCheckboxChange}
          />
      </Form.Group>

      <div className={appStyles.ButtonContainer}>
      <Button
        className={`${btnStyles.Button}  `}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <br/>
      <Button className={`${btnStyles.Button}`} type="submit">
        Create
      </Button>
      </div>
    </div>
  );

  return (
    <Container className={styles.OutterContainer}>
    <Form onSubmit={handleSubmit}>
      <Row>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              {image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button}`}
                      htmlFor="image-upload"
                    >
                      Change Image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset
                    src={Upload}
                    message="Click or tap to upload an image"
                  />
                </Form.Label>
              )}

              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Container>
          <Container className={appStyles.Content}>{textFields}</Container>
      </Row>
    </Form>
    </Container>
  );
}

export default ArticleEditForm;
