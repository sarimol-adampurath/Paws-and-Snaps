//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Imports from React 
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";

import InfiniteScroll from "react-infinite-scroll-component";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Import from React Bootstrap 
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Internal Imports 
import Asset from "../../components/Assets";
import appStyles from "../../App.module.css";
import styles from "../../styles/ArticlesHomePage.module.css";
import { axiosReq } from "../../api/axiosDefault";
import ArticlePage from "./ArticlePage";
import { fetchMoreData } from "../../utils/utils";
import useDebounce from "../../hooks/useDebounce";
import NoResults from "../../assets/not found.jpg";
import { useRedirect } from "../../hooks/useRedirect";


function ArticlesHomePage() {
    useRedirect('loggedOut');
  
    const [article, setArticles] = useState({ results: [], next: null });
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();
    const history = useHistory();
    const [query, setQuery] = useState("");
    const debouncedQuery = useDebounce(query, 500); // Debounce search query with a delay of 500ms
  
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          let endpoint = '/articles/?published=true';
          // If debouncedQuery is not empty, add search parameter to the endpoint
          if (debouncedQuery.trim()) {
            endpoint += `&search=${debouncedQuery}`;
          }
          const { data } = await axiosReq.get(endpoint);
          // Filter the results to include only published articles
          const filteredData = {
            ...data,
            results: data.results.filter(article => article.published)
          };
  
  
          setArticles(filteredData);
          setHasLoaded(true);
        } catch (err) {
          // Error fetching articles
        }
      };
  
      setHasLoaded(false);
      fetchPosts();
    }, [pathname, debouncedQuery]);
  
    // Function to handle click on a card
    const handleCardClick = (selectedArticle) => {
      setSelectedArticle(selectedArticle);
      // Redirect to the ArticlePage with the selected article's ID
      history.push(`/articles/${selectedArticle.id}`);
    };
    return (
      <Container className={styles.Container} onClick={() => setSelectedArticle(null)}>
        <Row className="d-flex justify-content-center">
          <Col>
            {/* Search Bar */}
            <Form
              className={styles.SearchBar}
              onSubmit={(event) => event.preventDefault()}
            >
              <Form.Control
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                type="text"
                placeholder="Search Articles"
              />
            </Form>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          {/* Render three cards in a row for large screen and 2 cards and one card 
          respectively on medium and smaller screen*/}
          {hasLoaded ? (
            article.results.length > 0 ? (
              <div className={styles.InfiniteScrollOuterDiv}>
                <InfiniteScroll
                  dataLength={article.results.length}
                  loader={<Asset spinner />}
                  hasMore={!!article.next}
                  next={() => fetchMoreData(article, setArticles)}
                >
                  <div className="d-flex flex-wrap justify-content-center">
                    {article.results.map((innerArticle) => (
                      <Col lg={4} md={6}  sm={12} key={innerArticle.id}>
                        <Card className={`${styles.SmallCard} my-3`} onClick={() => handleCardClick(innerArticle)}>
                          <Card.Img variant="top" src={innerArticle.image} className={styles.SmallCardImage} />
                          <Card.Body>
                            <Card.Title className={styles.SmallCardTitle}>{innerArticle.title}</Card.Title>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </div>
                </InfiniteScroll>
              </div>
            ) : (
              <Container className={appStyles.AssetContainer}>
              {/**Renders the no results when there is no related daat found */}
                <Asset src={NoResults} message={"No Results Found"} />
              </Container>
            )
          ) : (
            <Container className={appStyles.AssetContainer}>
              {/**Renders the spinner until the data is fetched */}
              <Asset spinner />
            </Container>
          )}
        </Row> 
        
        {/* Render Article component if an article is selected */}
        {selectedArticle && <ArticlePage {...selectedArticle} />}
      </Container>
    );
      

}


export default ArticlesHomePage;