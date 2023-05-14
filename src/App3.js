import React, { useEffect, useRef, useState } from 'react';
import download from './images/download.jpg';

const ThirdSection = () => {
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
								<div className="p-0">
									<div>
										<div>
											<div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													xmlnsXlink="http://www.w3.org/1999/xlink"
													viewBox="0 0 575 360"
													width={575}
													height={360}
													preserveAspectRatio="xMidYMid meet"
													style={{
														width: '100%',
														height: '100%',
														transform:
															'translate3d(0px, 0px, 0px)',
														contentVisibility: 'visible',
													}}
												>
													<defs>
														<clipPath id="__lottie_element_2449">
															<rect
																width={575}
																height={360}
																x={0}
																y={0}
															/>
														</clipPath>
													</defs>
													<g clipPath="url(#__lottie_element_2449)">
														<g
															className="png"
															style={{ display: 'none' }}
															transform="matrix(0.3112734258174896,0,0,0.3112734258174896,263.8628234863281,71.67684936523438)"
															opacity="0.09815599999460574"
														></g>
														<g
															className="png"
															style={{ display: 'none' }}
															transform="matrix(0.3112734258174896,0,0,0.3112734258174896,138.59982299804688,71.67684936523438)"
															opacity="0.09815599999460574"
														></g>
														<g
															className="png"
															transform="matrix(0.3333300054073334,0,0,0.3333300054073334,257.0006408691406,254.50030517578125)"
															opacity={1}
															style={{ display: 'block' }}
														></g>
														<g
															className="png"
															transform="matrix(0.3333300054073334,0,0,0.3333300054073334,289.00006103515625,282.6667175292969)"
															opacity={1}
															style={{ display: 'block' }}
														></g>
													</g>
												</svg>
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
								<div className>
									<div>
										<div>
											<div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													xmlnsXlink="http://www.w3.org/1999/xlink"
													viewBox="0 0 575 360"
													width={575}
													height={360}
													preserveAspectRatio="xMidYMid meet"
													style={{
														width: '100%',
														height: '100%',
														transform:
															'translate3d(0px, 0px, 0px)',
														contentVisibility: 'visible',
													}}
												>
													<defs>
														<clipPath id="__lottie_element_2472">
															<rect
																width={575}
																height={360}
																x={0}
																y={0}
															/>
														</clipPath>
														<image
															width="1461px"
															height="820px"
															preserveAspectRatio="xMidYMid slice"
															src={download}
															alt="poi in the poi"
														/>
														<linearGradient
															id="__lottie_element_2476"
															spreadMethod="pad"
															gradientUnits="userSpaceOnUse"
															x1="0.24400000274181366"
															y1="19.864999771118164"
															x2="0.37700000405311584"
															y2="-20.18000030517578"
														>
															<stop
																offset="0%"
																stopColor="rgb(26,26,26)"
																stopOpacity={0}
															/>
															<stop
																offset="25%"
																stopColor="rgb(96,87,139)"
																stopOpacity="0.5"
															/>
															<stop
																offset="50%"
																stopColor="rgb(165,148,253)"
																stopOpacity={1}
															/>
															<stop
																offset="75%"
																stopColor="rgb(83,74,126)"
																stopOpacity="0.5"
															/>
															<stop
																offset="100%"
																stopColor="rgb(0,0,0)"
																stopOpacity={0}
															/>
														</linearGradient>
													</defs>

													<g clipPath="url(#__lottie_element_2472)">
														<g
															className="png"
															transform="matrix(0.3333300054073334,0,0,0.3333300054073334,44.00242614746094,-1.248291015625)"
															opacity={1}
															style={{ display: 'block' }}
														>
															<img
																width="1461px"
																height="820px"
																preserveAspectRatio="xMidYMid slice"
																src="./images/download.jpg"
																alt="poi in the poi"
															/>
														</g>
														<g
															transform="matrix(1,0,0,1,287,180)"
															opacity="0.011407541507840761"
															style={{ display: 'block' }}
														>
															<g
																opacity={1}
																transform="matrix(1,0,0,1,0,0)"
															>
																<path
																	fill="rgb(15,15,15)"
																	fillOpacity={1}
																	d=" M-206.4530029296875,-163.25 C-206.4530029296875,-163.25 -206.5,-137.75 -206.5,-137.75"
																/>
																<path
																	strokeLinecap="butt"
																	strokeLinejoin="miter"
																	fillOpacity={0}
																	strokeMiterlimit={4}
																	stroke="rgb(165,148,253)"
																	strokeOpacity={1}
																	strokeWidth={1}
																	d=" M-206.4530029296875,-163.25 C-206.4530029296875,-163.25 -206.5,-137.75 -206.5,-137.75"
																/>
															</g>
														</g>
														<g
															transform="matrix(1,0,0,1,323.875,477)"
															opacity={1}
															style={{ display: 'block' }}
														>
															<g
																opacity="0.6425731755346434"
																transform="matrix(1,0,0,1,-272.8479919433594,-424.18505859375)"
															>
																<path
																	fill="url(#__lottie_element_2476)"
																	fillOpacity={1}
																	d=" M1,-30 C1,-30 1,30 1,30 C1,30 -1,30 -1,30 C-1,30 -1,-30 -1,-30 C-1,-30 1,-30 1,-30z"
																/>
																<path
																	strokeLinecap="butt"
																	strokeLinejoin="miter"
																	fillOpacity={0}
																	strokeMiterlimit={4}
																	stroke="rgb(31,31,31)"
																	strokeOpacity={1}
																	strokeWidth={0}
																	d=" M1,-30 C1,-30 1,30 1,30 C1,30 -1,30 -1,30 C-1,30 -1,-30 -1,-30 C-1,-30 1,-30 1,-30z"
																/>
															</g>
														</g>
													</g>
												</svg>
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

export default ThirdSection;
