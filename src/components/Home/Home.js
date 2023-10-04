import React from "react";
import "../Home/Home.css";
import Product from "../Products/Product";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const items = [
	<img
		className="home__image"
		src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
		alt="banner"
	/>,
	<img
		className="home__image"
		src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
		alt="banner"
	/>,
	<img
		className="home__image "
		src="https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg"
		alt="banner"
	/>,
	<img
		className="home__image "
		src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg"
		alt="banner"
	/>,
	<img
		className="home__image "
		src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg"
		alt="banner"
	/>,
];

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				{/* <img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
					alt=""
				/> */}
				<AliceCarousel
					autoPlay
					autoPlayStrategy="none"
					autoPlayInterval={4500}
					animationDuration={4500}
					animationType="slideout"
					infinite
					touchTracking={false}
					disableDotsControls
					disableButtonsControls
					items={items}
				/>
				<div className="home__row">
					<Product
						id="12321341"
						title="Apple iPhone 12 Mini, 64GB, Blue - Unlocked (Renewed)"
						price={284.99}
						rating={5}
						image="https://m.media-amazon.com/images/I/61M5w4HMIJL._AC_SY679_.jpg"
					/>
					<Product
						id="12321341"
						title="HP Victus 15.6 144Hz FHD IPS Premium Gaming Laptop | 13th Gen Intel Core i5-13420H | 16GB RAM | 512GB SSD | NVIDIA GeForce RTX 3050 | Backlit Keyboard | Windows 11 Home | Bundle with HDMI Cable"
						price={502}
						rating={5}
						image="https://m.media-amazon.com/images/I/61-RhukWpsL._AC_SX466_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="12321341"
						title="Amazon Fire TV 75  Omni QLED Series 4K UHD smart TV + 4-Year Protection Plan"
						price={1300}
						rating={5}
						image="https://m.media-amazon.com/images/I/51iRCVZ9P-L._AC_UY218_.jpg"
					/>
					<Product
						id="12321341"
						title="Hanes Men's T-Shirt, Moisture-Wicking Cotton Crewneck Pocket Tees, 6-Pack"
						price={36.98}
						rating={5}
						image="https://m.media-amazon.com/images/I/61NxWlAdrpL._AC_UY550_.jpg"
					/>
					<Product
						id="12321341"
						title="Sony SRS-XP700 X-Series Wireless Portable-BLUETOOTH-Karaoke Party-Speaker IPX4 Splash-resistant with 25 Hour-Battery,Black"
						price={548}
						rating={5}
						image="https://m.media-amazon.com/images/I/81wBe-GPvJS._AC_UY218_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="12321341"
						title="SAMSUNG Odyssey Ark 55-Inch Curved Gaming Screen, 4K UHD 165Hz 1ms (GTG) Quantum Mini-LED Gamer Monitor w/Cockpit Mode, Sound Dome Technology, Multi View, HDR10+ (S55BG970NN) 2022,Black"
						price={1999}
						rating={5}
						image="https://m.media-amazon.com/images/I/81mVo0xRU0L._AC_UY218_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="12321341"
						title="Apple 2021 MacBook Pro (16-inch, M1 Pro chip with 10‑core CPU and 16‑core GPU, 32GB RAM, 512GB SSD) - Space Gray Z14V0016E"
						price={1899.0}
						rating={5}
						image="https://m.media-amazon.com/images/I/61aUBxqc5PL._AC_UY218_.jpg"
					/>
					<Product
						id="12321341"
						title="Introducing Amazon Fire Max 11 tablet productivity bundle with Keyboard Case, Stylus Pen, octa-core processor, 4 GB RAM to do more throughout your day, 128 GB, Gray, without lockscreen ads"
						price={299.99}
						rating={5}
						image="https://m.media-amazon.com/images/I/61ND6rKdHjL._AC_UY218_.jpg"
					/>
					<Product
						id="12321341"
						title="Iynnijoy Men's Slim Fit 3 Piece Suit Two Buttons Business Wedding Prom Suits Blazer Tux Vest Trouser"
						price={49}
						rating={5}
						image="https://m.media-amazon.com/images/I/51-Nc4U9-PL._AC_UX569_.jpg"
					/>
					<Product
						id="12321341"
						title="COOFANDY Men’s Casual Blazer Jackets Two Button Lightweight Slim Fit Sports Coat"
						price={59}
						rating={5}
						image="https://m.media-amazon.com/images/I/71qdOmY9aIL._AC_UL320_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="12321341"
						title="SAMSUNG 15.6 Galaxy Book3 Business Laptop Computer/Windows 11 PRO/16GB - 512GB/ 13th Gen Intel® Core i7-1355U Processor, 2023 Model, NP754XFG-KB1US, Silver"
						price={1029}
						rating={5}
						image="https://m.media-amazon.com/images/I/71IqYm24D+L._AC_UY218_.jpg"
					/>
					<Product
						id="12321341"
						title="SKG Smart Watch for Men Women Android iPhone, Smartwatch with Alexa Built-in & Bluetooth Call(Answer/Make Call) 1.69 Fitness Tracker with IP68 Waterproof, 60+ Sports, Heart Rate SpO2 Monitor, V7 Pro"
						price={119}
						rating={5}
						image="https://m.media-amazon.com/images/I/61hMnSDh1BL._AC_UY218_.jpg"
					/>
					<Product
						id="12321341"
						title="EIGIIS Smart Watch for Men Women HD Outdoor Fitness Tracker Watch with Heart Rate Monitor Sleep Tracker Pedometer Smartwatch for iPhone Android Phones"
						price={72}
						rating={5}
						image="https://m.media-amazon.com/images/I/81THV9GoBVL._AC_UY218_.jpg"
					/>
					<Product
						id="12321341"
						title="All-new Amazon Fire HD 10 tablet, built for relaxation, 10.1 vibrant Full HD screen, octa-core processor, 3 GB RAM, latest model (2023 release), 64 GB, Lilac, without lockscreen ads"
						price={194}
						rating={5}
						image="https://m.media-amazon.com/images/I/51XL4VuXC3L._AC_UY218_.jpg"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
