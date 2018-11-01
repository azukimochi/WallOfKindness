import React from 'react';
import PropTypes from 'prop-types';
import WallBody from '../../components/WallBody';
// import API from '../modules/API';


const Dashboard = ({ user, gifts, categories, wallName, address, btnClickHandler, addClick, removeClick, itemChanged }) => (
  <WallBody donor={user.name} gifts={gifts} categories={categories} address={address} email={user.email} addGiftBtnClick={addClick} addCategoryBtnClick={addClick} removeClickHandler={removeClick} submitBtnClick={btnClickHandler} inputChangeHandler={itemChanged} />
);

// Dashboard.propTypes = {
//   secretData: PropTypes.string.isRequired
// };

export default Dashboard;