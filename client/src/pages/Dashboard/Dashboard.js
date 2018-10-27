import React from 'react';
import PropTypes from 'prop-types';
import WallBody from './WallBody';
// import API from '../modules/API';


const Dashboard = ({ secretData, user, gifts, categories, wallName, address, btnClickHandler, addClick, removeClick, itemChanged }) => (
  <WallBody angel={user.name} gifts={gifts} categories={categories} address={address} email={user.email} addGiftBtnClick={addClick} addCategoryBtnClick={addClick} removeClickHandler={removeClick} submitBtnClick={btnClickHandler} inputChangeHandler={itemChanged} />
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;