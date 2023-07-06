import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const LoadingButton = (props) => {
	const [isLoading, setLoading] = useState(false);

	const handleClick = async () => {
		setLoading(true);
		await props.onLoadMore();
		setLoading(false);
	};
		



	return (
		<div className='d-flex justify-content-center my-4'>
			<Button variant='primary' disabled={isLoading || props.disabled} onClick={handleClick} >
				{isLoading ? 'Loading…' : 'Click to load'}
			</Button>
		</div>
	);
};

export default LoadingButton;
