import React, { useEffect, useRef, useState } from 'react';

import Section2_1 from '../images/section2_1.png';
import Section2_2 from '../images/section2_2.png';
import Section2_3 from '../images/section2_3.png';

const SecondSection = () => {
	const sectionRef = useRef(null);
	const [scrollPercentage, setScrollPercentage] = useState(0);
	const [scroll, setScroll] = useState(1);

	useEffect(() => {
		function handleScroll() {
			const section = sectionRef.current;
			if (!section) return;

			const scrollPosition = window.scrollY > 650 ? window.scrollY - 650 : 0;
			const sectionHeight = section.clientHeight;

			const maxScrollPosition = sectionHeight;
			const scrollPercentage = (scrollPosition / maxScrollPosition) * 100;

			setScrollPercentage(scrollPercentage);

			console.log(scrollPercentage);
			if (scrollPercentage < 481 / 3) {
				setScroll(1);
			} else if (
				scrollPercentage >= 481 / 3 &&
				scrollPercentage < (481 * 2) / 3
			) {
				setScroll(2);
			} else if (
				scrollPercentage >= (481 * 2) / 3 &&
				scrollPercentage < 481
			) {
				setScroll(3);
			}
		}

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className="container mt-20">
			<div className="stacked_wrapper__PZJ2V">
				<div class="stacked_head__r8uz7">
					<div>
						<div>
							<div class="flex items-center gap-[5px] mb-4">
								<svg
									width="18"
									height="18"
									viewBox="0 0 18 18"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="mt-[3px]"
								>
									<path
										d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999545 9.14164 -0.0999545 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z"
										fill="#A594FD"
									></path>
								</svg>
								<h4 class="font-normal">Workflow</h4>
							</div>
							<h2>Create at the speed of thought.</h2>
							<p>
								Focus on your getting your thoughts out and crafting the
								best message while Chronicle does the heavy lifting for
								you
							</p>
						</div>
					</div>
				</div>

				<div className="stacked_stack__aeW9h">
					<div
						className="sticky top-0 left-0 flex items-center h-screen"
						ref={sectionRef}
					>
						<div
							className="item absolute h-full top-0 left-0 w-full flex items-center pr-16"
							style={{
								opacity: scroll === 1 ? 1 : 0,
								translate: 'none',
								rotate: 'none',
								scale: 'none',
								transform:
									scroll === 1
										? 'translate(0px, 0px)'
										: 'translate(0px, 250px)',
							}}
						>
							<div className="box">
								<div className="p-2 pb-0">
									<div>
										<div>
											<img src={Section2_1} alt="section2_1" />
										</div>
									</div>
								</div>
								<div className="box__head px-10 pb-16 text-center">
									<h3 className="mb-4">
										A keyboard
										<br />
										first experience.
									</h3>
									<p className="text-mid">
										Powerful shortcuts and a keyboard-first workflow
										means you will get to your finish line in no time!
									</p>
								</div>
							</div>
						</div>

						<div
							className="item absolute h-full top-0 left-0 w-full flex items-center pr-16"
							style={{
								opacity: scroll === 2 ? 1 : 0,
								translate: 'none',
								rotate: 'none',
								scale: 'none',
								transform:
									scroll === 2
										? 'translate(0px, 0px)'
										: 'translate(0px, 250px)',
							}}
						>
							<div className="box">
								<div className="p-0">
									<div>
										<div>
											<div className="flex justify-center align-middle h-60">
												<img
													className="h-44 w-60 m-auto"
													src={Section2_2}
													alt="section2_2"
												/>
											</div>
										</div>
									</div>
								</div>
								<div className="box__head px-10 pb-16 text-center">
									<h3 className="mb-4">
										Bullets to visuals
										<br />
										in a click.
									</h3>
									<p className="text-mid">
										Transform any block to any other and try different
										options without any design hassle
									</p>
								</div>
							</div>
						</div>

						<div
							className="item absolute h-full top-0 left-0 w-full flex items-center pr-16"
							style={{
								opacity: scroll === 3 ? 1 : 0,
								translate: scroll === 3 ? 1 : 0,
								rotate: 'none',
								scale: scroll === 3 ? 1 : 0.8,
								transform:
									scroll === 3
										? 'translate(0px, 0px)'
										: 'translate(0px, 250px)',
							}}
						>
							<div className="box">
								<div className>
									<div>
										<div>
											<div className="px-6">
												<img src={Section2_3} alt="section2_3" />
											</div>
										</div>
									</div>
								</div>
								<div className="box__head px-10 pb-16 text-center">
									<h3 className="mb-4">
										A powerful assistant
										<br />
										just a click away
									</h3>
									<p className="text-mid">
										Insert blocks, perform powerful actions and
										leverage the limitless power of AI - all without
										leaving your keyboard
									</p>
								</div>
							</div>
						</div>

						<div className="absolute top-[50%] right-0 -translate-y-[50%] flex flex-col items-center gap-2">
							<span className="text-[12px] opacity-40">0{scroll}</span>
							<div className="w-[4px] h-[400px] bg-[#232323] relative rounded-full overflow-hidden">
								<span
									className="absolute top-0 left-0 w-full bg-[#A594FD] rounded-full"
									style={{ height: scrollPercentage }}
								/>
							</div>
							<span className="text-[12px] opacity-40">03</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SecondSection;
