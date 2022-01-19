import React, { useState } from "react";

let PurpleColorEnabled = false;

const TrafficLight = () => {
	const LightColors = ["red", "orange", "green", "purple"];

	const [color, setColor] = useState("");

	const HandleLight = (SelectedColor) => setColor(SelectedColor);

	const RenderLights = () =>
		LightColors.map((ColorName, ColorIndex) => (
			<div
				key={ColorIndex}
				className={
					"light " +
					ColorName +
					(color === ColorName ? " selected" : "")
				}
				style={{
					display:
						ColorName === "purple"
							? PurpleColorEnabled
								? "block"
								: "none"
							: "block",
				}}
				onClick={() => HandleLight(ColorName)}></div>
		));

	const AutomaticCycle = () => {
		let ColorIndex = 0;

		setInterval(() => {
			if (ColorIndex < LightColors.length) {
				console.log(ColorIndex);
				HandleLight(LightColors[ColorIndex]);
				ColorIndex++;
			} else {
				return false;
			}
		}, 500);
	};

	return (
		<div className="main-wrapper bg-light">
			<div className="m-auto bg-black" id="traffic-light-line"></div>
			<div
				className="d-flex flex-column justify-content-center align-items-center gap-2 m-auto p-2 bg-black shadow-sm"
				id="traffic-light">
				{RenderLights()}
			</div>

			<div className="d-flex justify-content-center flex-wrap gap-2 mt-4">
				<button
					type="button"
					className="btn btn-sm btn-primary shadow-none"
					onClick={AutomaticCycle}>
					Run <strong>automatic cycle</strong>
				</button>
				<button
					type="button"
					className="btn btn-sm btn-outline-primary shadow-none"
					onClick={() => {
						HandleLight(PurpleColorEnabled ? "" : "purple");
						PurpleColorEnabled = !PurpleColorEnabled;
					}}>
					<strong>Enable / Disable</strong> purple light
				</button>
			</div>
		</div>
	);
};

export default TrafficLight;
