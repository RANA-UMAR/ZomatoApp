import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Cards = ({ food }) => {
  return (
    <div className='row'>
      {food.map((element, k) => (
        <div key={k} className='col-lg-4 mb-4'>
          <Card style={{ width: '22rem' }} className='hove'>
            <Card.Img variant='top' className='cd' src={element.imgdata} />
            <div className='main_card'>
              <div className='upperdata d-flex justify-content-between align-items-center'>
                <h4>{element.rname}</h4>
                <span>{element.rating}&nbsp;★</span>
              </div>
              <div className="bottomline"></div>
              <div className='lowerdata d-flex justify-content-between align-items-center'>
                <h5>{element.address}</h5>
                <span>{element.price}</span>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Cards;
