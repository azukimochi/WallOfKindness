import React from 'react';
import PropTypes from 'prop-types';
import WallBody from '../../components/WallBody';
// import API from '../modules/API';


const Dashboard = ({ city, name, zipCode,gifts, categories, wallName, email,btnClickHandler, addClick, removeClick, itemChanged }) => (
  <WallBody donor={name} city={city} zipCode={zipCode} wallName ={wallName} gifts={gifts} categories={categories} email={email} addGiftBtnClick={addClick} addCategoryBtnClick={addClick} removeClickHandler={removeClick} submitBtnClick={btnClickHandler} inputChangeHandler={itemChanged} />
);

// Dashboard.propTypes = {
//   secretData: PropTypes.string.isRequired
// };

export default Dashboard;