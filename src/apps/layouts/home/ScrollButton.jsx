import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Icon from '@app/components/icon'

export default function ScrollButton() {
	const [showScrollToTop, setShowScrollToTop] = useState(false);

	const handleScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	const handleScrollToBottom = () => {
		window.scrollTo({
			top: document.documentElement.scrollHeight,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			setShowScrollToTop(scrollTop > 0);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const scrollToBottomButtonStyle = {
		position: 'fixed',
		bottom: '3rem',
		right: '1.5rem',
		zIndex: 1080,
		boxShadow: '0 1px 20px 1px #ea5455',
	};

	return (
		<>
			<div>
				{showScrollToTop ? (
					<Button
						variant="light"
						style={{
							...scrollToBottomButtonStyle,
							top: 'auto',
							bottom: '3rem',
						}}
						onClick={handleScrollToTop}
					>
						Scroll To Top
						<Icon icon='tabler:arrow-up' />
					</Button>
				) : (
					<Button
						variant="outline-dark"
						className="btn-buy-now waves-effect waves-light"
						style={scrollToBottomButtonStyle}
						onClick={handleScrollToBottom}
					>
						<Icon icon='tabler:arrow-down' />
					</Button>
				)}
			</div>
		</>
	)
}
