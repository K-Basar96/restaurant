import React, { useState } from 'react';
import './Restaurant.css';
import itemList from './itemList';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const distinctCategory = [
	...new Set(
		itemList.map((curCateg) => {
			return curCateg.category;
		}),
	),
	'All',
];

const Restaurant = () => {
	const [menuData, setMenudata] = useState(itemList);
	const [menuList, setMenuList] = useState(distinctCategory);

	const filterItem = (category) => {
		if (category === 'All') {
			setMenudata(itemList);
			return;
		}
		const updateList = itemList.filter((current) => {
			return current.category === category;
		});
		setMenudata(updateList);
	};

	return (
		<>
			<Navbar filterItem={filterItem} menuList={menuList} />
			<MenuCard menuData={menuData} />
		</>
	);
};

export default Restaurant;
