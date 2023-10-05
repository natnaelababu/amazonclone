import React, { useState, useEffect } from "react";

const Scroll = () => {
	const [isVisible, setIsVisible] = useState(false);

	const handleScroll = () => {
		const scrollTop = window.pageYOffset;

		if (scrollTop > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const buttonStyle = {
		display: isVisible ? "block" : "none",
	};

	return (
		<div className="scroll-up-button" style={buttonStyle} onClick={scrollToTop}>
			<span>Back to top</span>
		</div>
	);
};

export default Scroll;
