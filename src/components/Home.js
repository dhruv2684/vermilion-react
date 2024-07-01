import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import axios from 'axios';


// import { FaSearch } from "react-icons/fa";

import mini from '../img/mini.jpg'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Home = () => {

  const [blog, setBlog] = useState([])
  const history = useHistory();

  useEffect(() => {
    getBlog()
  }, [])

  const getBlog = () => {
    axios.get('https://vermilion-node.onrender.com/blog/find')
      .then((res) => {
        console.log(res.data.data);
        setBlog(res.data.data)
      })
      .catch((error) => {
        console.log(error.response.data.message);
      })
  }

  const cardd = () => {
    history.push('/')
  }
  

  return (
    <div className='bg'>

      {/* heading part */}
      <Container fluid className='pt-5 '>
        <Container>
          <Row>
            <div className="text-center fw-bold pt-5">
              <h1 className=' fs-45'>Discover communities </h1>
              <div className='fs-20'>or <a href='/blog' className='blue-col'>Create Your Own</a></div>

              <div>
                <input
                  placeholder="Search for anything"
                  type="search"
                  value=""
                  className='search'
                />
              </div>
            </div>
          </Row>
        </Container>
      </Container>


      {/*  */}
      <Container fluid className='pt-5 '>
        <Container>
          <Row className=''>
            <ul className='d-lg-flex gap-2'>
              <li className='all mb-lg-0 mb-2'><a href="/" className='text-dark text-decoration-none' >All</a></li>
              <li className='box mb-lg-0 mb-2'><a href="/" className='text-dark text-decoration-none' >💰 Buisness</a></li>
              <li className='box mb-lg-0 mb-2'><a href="/" className='text-dark text-decoration-none' >🍎  Health & fitness</a></li>
              <li className='box mb-lg-0 mb-2'><a href="/" className='text-dark text-decoration-none' > 📚  Personal development</a></li>
              <li className='box mb-lg-0 mb-2'><a href="/" className='text-dark text-decoration-none' > 🎨 Arts & crafts</a></li>
              <li className='box mb-lg-0 mb-2'><a href="/" className='text-dark text-decoration-none' > 🎸 Music</a></li>
              <li className='box mb-lg-0 mb-2'><a href="/" className='text-dark text-decoration-none' >🛍️  E-commerce</a></li>
              <li className='box mb-lg-0 mb-2'><a href="/" className='text-dark text-decoration-none' >More</a></li>
              <li className='box mb-lg-0 mb-2'><a href="/" className='text-dark text-decoration-none' >Filter</a></li>
            </ul>

          </Row>
        </Container>
      </Container>


      {/*  */}
      <Container fluid className=' pb-5 '>
        <Container>

          <Row className=" pt-lg-4 pt-3 g-3">
            {
              blog.map((el, index) => {
                return <div className='col-md-4 col-12 pointer' key={index} >
                  <Card onClick={cardd}>
                    <div className="img-box">
                      <Card.Img variant="top" src={'https://vermilion-node.onrender.com/images/' + el.image} />
                    </div>
                    <Card.Body>
                      <Card.Title className='fs-5'> <img src={mini} width="15%" alt="" />{el.title}</Card.Title>
                      <Card.Text className='lh-3'>{el.description}</Card.Text>
                      <div className='d-flex gap-3'>
                        <p>Private .</p>
                        <p>24.7K Members </p>
                        <p className='fw-bold'>Free </p>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              })
            }
          </Row>
        </Container>
      </Container>

    </div>
  )
}

export default Home