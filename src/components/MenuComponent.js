import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Menu extends Component {

  constructor(props) {
    super(props);

      this.state = {
        dishes: [
          {
            id: 0,
            name:'Pizza',
            image:'assets/images/pizza.png',
            category:'mains',
            label:'Hot',
            price:'15.99',
            description:'A unique pizza for you.'
          },
          {
            id: 1,
            name:'Ice Cream',
            image:'assets/images/cream.jpg',
            category:'dessert',
            label:'',
            price:'4.99',
            description:'One of the best.'
          },
          {
            id: 2,
            name:'Chips',
            image:'assets/images/p-chips.jpg',
            category:'snack',
            label:'',
            price:'10.99',
            description:'Crispy potatoe chips.'
          },
          {
            id: 3,
            name:'Burger',
            image:'assets/images/burger.jpg',
            category:'mains',
            label:'Hot',
            price:'13.99',
            description:'Simply the best.'
          }
        ]
      }
  }

  render() {

    const menu = this.state.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 mt-5">
          <Media tag="li">
            <Media left middle>
              <Media object src={dish.image} alt={dish.name} />
            </Media>
            <Media body className="ml-5">
              <Media heading>{dish.name}</Media>
              <p>{dish.description}</p>
            </Media>
          </Media>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          <Media list>
            {menu}
          </Media>
        </div>
      </div>
    );
  }
}

export default Menu;
