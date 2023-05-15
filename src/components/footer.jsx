import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

class Footer extends React.Component {
	render() {
		const LoadingButton = (props) => {
			const [isLoading, setLoading] = useState(false);

			const handleClick = async () => {
				setLoading(true);
				await props.onLoadMore();
				setLoading(false);
			};

			return (
				<div className='d-flex justify-content-center my-4'>
					<Button variant='primary' disabled={isLoading} onClick={handleClick}>
						{isLoading ? 'Loading…' : 'Click to load'}
					</Button>
				</div>
			);
		};

		return <LoadingButton onLoadMore={this.props.onLoadMore} />;
	}
}

export default Footer;
