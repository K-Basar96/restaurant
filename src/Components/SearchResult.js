import React from 'react';

const SearchResult = (props) => {
	return (
		<>
			{props.menuList
				.filter((val) => {
					if (props.search === '') {
						return val;
					} else if (val.name.toLowerCase().includes(props.search.toLowerCase())) {
						return val;
					}
				})
				.map((val, key) => {
					return (
						<div className='search-result' key={key}>
							<p>{val.props.name}</p>
						</div>
					);
				})}
		</>
	);
};

export default SearchResult;
