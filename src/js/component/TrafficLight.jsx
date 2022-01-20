import React, { useState } from "react";

const TrafficLight = () => {
	const DefaultColors = ["red", "orange", "green"];

	const [AvailableColors, setAvailableColors] = useState([...DefaultColors]);
	const [ActiveColor, setActiveColor] = useState("");

	const HandleLight = (SelectedColor) => setActiveColor(SelectedColor);

	const RenderLights = () =>
		AvailableColors.map((ColorName, ColorIndex) => (
			<div
				key={ColorIndex}
				className={
					"light " +
					ColorName +
					(ActiveColor === ColorName ? " selected" : "")
				}
				onClick={() => HandleLight(ColorName)}></div>
		));

	const AutomaticCycle = () => {
		let ColorIndex = 0;

		setInterval(() => {
			if (ColorIndex <= AvailableColors.length) {
				HandleLight(AvailableColors[ColorIndex]);
				ColorIndex++;
			} else {
				return false;
			}
		}, 500);
	};

	const AddNewLightColor = (NewColor) =>
		setAvailableColors(
			AvailableColors.includes(NewColor)
				? AvailableColors.filter((ColorName) => ColorName !== NewColor)
				: [...AvailableColors, NewColor]
		);

	return (
		<>
			<div className="m-auto bg-black" id="traffic-light-line"></div>
			<div
				className="d-flex flex-column justify-content-center align-items-center gap-2 m-auto p-2 bg-black"
				id="traffic-light">
				{RenderLights()}
			</div>

			<div className="d-flex justify-content-center flex-wrap gap-2 mt-4">
				<button
					type="button"
					className="btn btn-sm btn-dark shadow-none"
					onClick={AutomaticCycle}>
					&#8635; <strong>Automatic</strong> cycle
				</button>
				<button
					type="button"
					className="btn btn-sm btn-outline-dark shadow-none"
					onClick={() => AddNewLightColor("purple")}>
					&#8723; <strong>Add / Remove</strong> purple light
				</button>
			</div>
		</>
	);
};

export default TrafficLight;
