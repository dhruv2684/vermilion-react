import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import mini from '../img/hash.png';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { FaSearch } from "react-icons/fa";

const Home = () => {
  const [blog, setBlog] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const history = useHistory();

  useEffect(() => {
    getBlog();
  }, []);

  const getBlog = () => {
    axios.get('https://vermilion-node.onrender.com/blog/find')
      .then((res) => {
        console.log(res.data.data);
        setBlog(res.data.data);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  const cardd = () => {
    history.push('/');
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const search = () => {
    axios.get(`https://vermilion-node.onrender.com/blog/search?s=${searchQuery}`)
      .then((res) => {
        console.log(res.data.data);
        setBlog(res.data.data);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  return (
    <div className='bg'>
      {/* Heading part */}
      <Container fluid className='pt-5 '>
        <Container>
          <Row>
            <div className="text-center fw-bold pt-5">
              <h1 className='fs-45'>Discover communities</h1>
              <div className='fs-20'>or <a href='/blog' className='blue-col'>Create Your Own</a></div>

              <div>
                <input
                  placeholder="Search for anything"
                  type="search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className='search'
                />
                <Button onClick={search} className='submit'>Search</Button>
              </div>
            </div>
          </Row>
        </Container>
      </Container>

      {/* Categories */}
      <Container fluid className='pt-5 '>
        <Container>
          <Row className=''>
            <ul className='d-lg-flex gap-2'>
              <li className='all mb-lg-0 mb-2'><a href="/" className='text-dark text-decoration-none'>All</a></li>
              <li className='box mb-lg-0 mb-2'><a href="/" className='text-dark text-decoration-none'>💰 Business</a></li>
              <li className='box mb-lg-0 mb-2'><a href="/" className='text-dark text-decoration-none'>🍎 Health & Fitness</a></li>
              <li className='box mb-lg-0 mb-2'><a href="/" className='text-dark text-decoration-none'>📚 Personal Development</a></li>
              <li className='box mb-lg-0 mb-2'><a href="/" className='text-dark text-decoration-none'>🎨 Arts & Crafts</a></li>
              <li className='box mb-lg-0 mb-2'><a href="/" className='text-dark text-decoration-none'>🎸 Music</a></li>
              <li className='box mb-lg-0 mb-2'><a href="/" className='text-dark text-decoration-none'>🛍️ E-commerce</a></li>
              <li className='box mb-lg-0 mb-2'><a href="/" className='text-dark text-decoration-none'>More</a></li>
              <li className='box mb-lg-0 mb-2'><a href="/" className='text-dark text-decoration-none'>Filter</a></li>
            </ul>
          </Row>
        </Container>
      </Container>

      {/* Blog Cards */}
      <Container fluid className='pb-5 '>
        <Container>
          <Row className="pt-lg-4 pt-3 g-3">
            {blog.length ? blog.map((el, index) => (
              <div className='col-md-4 col-12 pointer' key={el?._id}>
                <Card onClick={cardd}>
                  <div className="img-box">
                    <Card.Img variant="top" className='img-box' src={`https://vermilion-node.onrender.com/images/${el?.image}`} />
                  </div>
                  <Card.Body>
                    <Card.Title className='fs-5'>
                      <img src={mini} width="15%" alt="" /> {el?.title}
                    </Card.Title>
                    <Card.Text className='lh-3'>{el?.description}</Card.Text>
                    <div className='d-flex gap-3'>
                      <p>Private .</p>
                      <p>24.7K Members </p>
                      <p className='fw-bold'>Free </p>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            )) :
              <div class="page">Ooops!!! The page you are looking for is not found</div>
            }
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Home;