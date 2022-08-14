import React, { useState } from 'react';
import SearchResult from './SearchResult';

const Navbar = (props) => {
	const [search, setSearch] = useState('');
	return (
		<>
			<nav className='navbar'>
				<div className='btn-group'>
					{props.menuList.map((curElem) => {
						return (
							<button
								className='btn-group__item'
								onClick={() => props.filterItem(curElem)}>
								{curElem}
							</button>
						);
					})}

					<div>
						{/* <input
							className='searchbar'
							type='text'
							name='search'
							placeholder='Search'
							onChange={(event) => {
								setSearch = event.target.value;
							}}
						/> */}
						{/* <SearchResult search={search} /> */}
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
