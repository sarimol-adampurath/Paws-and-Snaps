//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Imports from React 
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import InfiniteScroll from "react-infinite-scroll-component";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Imports from React Bootstrap
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Internal Imports 
import Asset from "../../components/Assets";
import { axiosReq } from "../../api/axiosDefault";
import Article from "./Article";
import styles from '../../styles/ArticlePage.module.css'
import CommentCreateForm from "../comments/CommentsCreateForm";
import Comment from "../comments/Comment";
import { fetchMoreData } from "../../utils/utils";
import appStyles from '../../App.module.css'
import NotFound from '../../assets/not found.jpg';
import { useRedirect } from "../../hooks/useRedirect";



function ArticlePage() {
    useRedirect('loggedOut');

    const { id } = useParams()
    const [article,setArticle] = useState({results:[]});
    const [hasLoaded, setHasLoaded] = useState(false);
    const currentUser = useCurrentUser();
    const profile_image = currentUser?.profile_image;
    const [comments, setComments] = useState({ results: [] });

    useEffect(() => {
      let isMounted = true; 
      const handleMount = async () => {
        try {
          const [{ data: article }, { data: comments }] = await Promise.all([
            axiosReq.get(`/articles/${id}`),
            axiosReq.get(`/comments/?article=${id}`),
          ]);

          if (!isMounted) {
            return;  // If component is unmounted, abort further processing
          }
    
          if (!article) {
            // If article doesn't exist, set article state to null
            setArticle(null);
            setComments([]);
            setHasLoaded(true);
            return;
          }
    
          // Article exists and is published set the article and comments
          setArticle({ results: [article] });
          setComments(comments);
          setHasLoaded(true);
        } catch (err) {
          setHasLoaded(true);
        }
      };
    
      handleMount();

      return () => {
        isMounted = false;
      };
    }, [id]);

  const approvedComments = comments.results.filter(comment => comment.is_approved);
  
  return (
    <Container>
        <Row className="h-100">
            <Col className=" p-0 " lg={12}>
                {hasLoaded ?
                    article.results.length > 0 ? (
                        <>
                            <div className={styles.Container}>
                                <Article {...article.results[0]} articlePage />
                            </div>
                            <div className={`${styles.CommentContainer} mt-4`}>
                                <h4>COMMENTS</h4>
                                <br /><br />
                                {hasLoaded ?
                                    (approvedComments.length ? (
                                        <div className={styles.CommentInfinitescroll}>
                                            <InfiniteScroll
                                                dataLength={approvedComments.length}
                                                loader={<Asset spinner />}
                                                hasMore={!!comments.next}
                                                next={() => fetchMoreData(comments, setComments)}
                                            >
                                                {approvedComments.map((comment) => (
                                                    <Comment
                                                        key={comment.id}
                                                        {...comment}
                                                        setArticle={setArticle}
                                                        setComments={setComments}
                                                    />
                                                ))}
                                            </InfiniteScroll>
                                        </div>
                                    ) : (
                                        <Container>
                                            No comments yet !!!
                                        </Container>
                                    ))
                                    : (
                                        <Container className={appStyles.AssetContainer}>
                                            <Asset spinner />
                                        </Container>
                                    )}

                            </div>
                            {currentUser ? (
                                <CommentCreateForm
                                    profile_id={currentUser.profile_id}
                                    profileImage={profile_image}
                                    article={id}
                                    article_owner={article.results[0].is_owner}
                                    setArticle={setArticle}
                                    setComments={setComments}
                                />
                            ) : approvedComments.length ? (
                                "Comments"
                            ) : null}
                        </>
                    ) : (<Container className={appStyles.AssetContainer}>
                        <Asset src={NotFound} message={'No Results Found'} />
                    </Container>)
                    : (<Container className={appStyles.AssetContainer}>
                        <Asset spinner />
                    </Container>)}
            </Col>
        </Row>
    </Container>
);
}

export default ArticlePage;
