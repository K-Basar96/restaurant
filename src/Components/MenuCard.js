import React from 'react';

const MenuCard = ({ menuData }) => {
	let OrderNow = () => {
		alert('Order successfull 😅');
	};

	return (
		<>
			<section className='main-card--cointainer'>
				{menuData.map((current) => {
					const { id, image, name, category, price, description } = current;
					return (
						<>
							<div className='card-container' key={id}>
								<div className='card'>
									<div className='card-body'>
										<span className='card-number card-circle subtle'>
											{id}{' '}
										</span>
										<span className='card-author subtle'> {category} </span>
										<h2 className='card-title'>{name}</h2>
										<span className='card-description subtle'></span>
										<div className='card-read'>{description}</div>
										<div>
											<img src={image} alt='images' className='card-media' />
											<span className='card-tag subtle' onClick={OrderNow}>
												Order Now
											</span>
											<span className='card-tag subtle'>
												RS: <b>{price}</b>
											</span>
										</div>
									</div>
								</div>
							</div>
						</>
					);
				})}
			</section>
		</>
	);
};

export default MenuCard;
