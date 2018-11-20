import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { Input } from "../../components/Form";
import "./autocomplete.css";

const WallBody = props => (
      <Container fluid>
        <form onSubmit={props.updateWall}>
          <Row>
            <Col size="md-6">
              <h3 style={{ textAlign: "center" }}>
                Welcome, {props.donor}
              </h3>
              
              <Input
                value={props.donor}
                onChange={props.handleItemChange}
                name="name"
                placeholder="Full Name (required)"
                // data-group="names"
                // data-attribute="fullName"
                id="UserfirstName"
              />

              <Input

                value={props.wallName}
                onChange={props.handleItemChange}
                name="wallName"
                placeholder="Wall Name (required)"
                // data-group="wall"
                // data-attribute="wallName"
                id="wallName"
              />

              <Input
                value={props.city}
                onChange={props.handleItemChange}
                name="city"
                placeholder="City (required)"
                // data-group="address"
                // data-attribute="city"
                id="UserAddress"
              />

              <Input
                value={props.zipCode}
                onChange={props.handleItemChange}
                name="zipCode"
                placeholder="Zip Code (required)"
                // data-group="address"
                // data-attribute="zipCode"
                id="UserAddress"
              />
              <Input
                value={props.email}
                onChange={props.handleItemChange}
                name="email"
                placeholder="Email (required)"
                // data-group="user"
                // data-attribute="email"
                id="UserEmail"
              />
             
              <Col size="md-6 sm-12">
              
                <button
                  id="categories"
                  className="button btn btn-primary"
                  onClick={props.addClick}
                >
                  Add More Items
                </button>
               
                {props.gifts.map((item, index) => (
                  <span>
                  <div key={index}>
                <Input 
                value={item}
                name="item"
                placeholder="Item Name (required)"
                onChange={(event) => props.handleGiftChange(index, event)} 
                />

                <select name="category" value={props.categories[index]} onChange={(event) => props.handleCategoryChange(index, event)}>
                      <option value="None">Category</option>
                      <option value="Food">Food</option>
                      <option value="Clothing">Clothing</option>
                    </select>
                {/* <Input
                value={props.categories[index]}
                name="category"
                onChange={(event) => props.handleCategoryChange(index, event)}
                /> */}

                  <i
                    className="fas fa-trash-alt"
                    aria-hidden="true"
                    onClick={(event) => props.removeClick(index, event)}
                  />
               </div>
                </span>
                ))}

                
                <br />
              </Col>
              <Col size="md-6 sm-12">
             
                {/* <button
                  id="gifts"
                  className="button btn btn-primary"
                  onClick={props.addClick}
                >
                  Add Gifts
                </button> */}
              </Col>
                {props.updateStatus}

              <button
                id="updateWallButton"
                className="btn btn-success ld-over-full-inverse"
                // disabled={!(this.state.author && this.state.title)}
              >
                <div className="ld ld-ball ld-flip"></div>Update Wall
              </button>
              <br />
           
            </Col>
            <Col size="md-6 sm-12">
              <br />
              <Jumbotron>
                <h5>{`Donor Name: ${props.donor}`}</h5>
                <h5>{`Wall Name: ${props.wallName}`}</h5>
                <h5>{`Email: ${props.email} `}</h5>
                <h5>{`City: ${props.city} `}</h5>
                <h5>{`Zip Code: ${props.zipCode} `}</h5>
              </Jumbotron>
            </Col>
          </Row>
        </form>
      </Container>
  
)

export default WallBody;


// class WallBody extends Component {
//   state = {
//     giftType: "",
//     giftName: "",
//     secretData: "",
//     user: {},
//     names: {
//       firstName: "",
//       lastName: ""
//     },
//     address: {
//       zipCode: ""
      
//     },
//     categories: [],
//     gifts: [],
//     wall: {
//       wallName: "Aboozar"
//     }
//   };

//   render() {

//     let categories = props.categories.map((item, index) => (
//       <li key={index}>
//         <input
//         name="categories"
//           data-group="categories"
//           data-attribute={index}
//           onChange={props.inputChangeHandlerGifts}
//           type="text"
//           value={item}
//         />
//         <i
//           className="fas fa-trash-alt"
//           aria-hidden="true"
//           data-group="categories"
//           data-attribute={index}
//           onClick={props.removeClickHandler}
//         />
//       </li>
//     ));

//     let gifts = props.gifts.map((item, index) => (
//       <li key={index}>
//         <input
//          name="gifts"
//           data-attribute={index}
//           data-group="gifts"
//           onChange={props.inputChangeHandlerGifts}
//           type="text"
//           value={item}
//         />
//         <br />
//         <i
//           className="fas fa-trash-alt"
//           aria-hidden="true"
//           data-group="gifts"
//           data-attribute={index}
//           onClick={props.removeClickHandler}
//         />
//       </li>
//     ));
    
//     return (
//       <Container fluid>
//         <form>
//           <Row>
//             <Col size="md-6">
//               <h3 style={{ textAlign: "center" }}>
//                 Welcome, {props.donor}
//               </h3>
              
//               <Input
//                 value={props.donor}
//                 onChange={props.inputChangeHandler}
//                 name="name"
//                 placeholder="Full Name"
//                 data-group="names"
//                 data-attribute="fullName"
//                 id="UserfirstName"
//               />

//               <Input

//                 value={props.wallName}
//                 onChange={props.inputChangeHandler}
//                 name="wallName"
//                 placeholder="Wall Name"
//                 data-group="wall"
//                 data-attribute="wallName"
//                 id="wallName"
//               />

//               <Input
//                 value={props.city}
//                 onChange={props.inputChangeHandler}
//                 name="city"
//                 placeholder="City (required)"
//                 data-group="address"
//                 data-attribute="city"
//                 id="UserAddress"
//               />

//               <Input
//                 value={props.zipCode}
//                 onChange={props.inputChangeHandler}
//                 name="zipCode"
//                 placeholder="Zip Code (required)"
//                 data-group="address"
//                 data-attribute="zipCode"
//                 id="UserAddress"
//               />
//               <Input
//                 value={props.email}
//                 onChange={props.inputChangeHandler}
//                 name="email"
//                 placeholder="Email (required)"
//                 data-group="user"
//                 data-attribute="email"
//                 id="UserEmail"
//               />
             
//               <Col size="md-6 sm-12">
              
//                 <button
//                   id="categories"
//                   className="button btn btn-primary"
//                   onClick={props.addCategoryBtnClick}
//                 >
//                   Add Categories
//                 </button>
//                 <ol>
//                   {/* {this.state.giftType} for testing */}
//                   {categories}
//                 </ol>
//                 <br />
//               </Col>
//               <Col size="md-6 sm-12">
             
//                 <button
//                   id="gifts"
//                   className="button btn btn-primary"
//                   onClick={props.addGiftBtnClick}
//                 >
//                   Add Gifts
//                 </button>

//                 <ol>
          
//                   {gifts}
//                 </ol>
//               </Col>

//               <button
//                 id="updateWallButton"
//                 className="btn btn-success ld-over-full-inverse"
//                 // disabled={!(this.state.author && this.state.title)}
//                 onClick={props.submitBtnClick}
//               >
//                 <div className="ld ld-ball ld-flip"></div>Update Wall
//               </button>
//               <br />
           
//             </Col>
//             <Col size="md-6 sm-12">
//               <br />
//               <Jumbotron>
//                 <h5>{`Donor Name: ${props.donor}`}</h5>
//                 <h5>{`Wall Name: ${props.wallName}`}</h5>
//                 <h5>{`Email: ${props.email} `}</h5>
//                 <h5>{`City: ${props.city} `}</h5>
//                 <h5>{`Zip Code: ${props.zipCode} `}</h5>
//               </Jumbotron>
//             </Col>
//           </Row>
//         </form>
//       </Container>
//     );
//   }
// }

// export default WallBody;
