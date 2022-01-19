import React, { useState } from "react";

const TrafficLight = () => {
	// Hook
	const [color, setColor] = useState("");

	const ColorsDefinition = ["red", "orange", "green"];

	const HandleLight = (SelectedLight) => {
		console.log(SelectedLight);
		setColor(SelectedLight);
	};

	const ActivateColors = () => {
		for (
			let IndexCounter = 0;
			IndexCounter < ColorsDefinition.length;
			IndexCounter++
		) {
			setTimeout(HandleLight(ColorsDefinition[IndexCounter]), 2000);
		}
	};

	return (
		<div className="container-fluid bg-light">
			<div className="row flex-column align-items-center">
				<div className="p-0 bg-black" id="traffic-light-line"></div>
				<div
					className="d-flex flex-column align-items-center justify-content-center gap-2"
					id="traffic-light">
					<div
						className={
							"light red bg-danger rounded-circle " +
							(color === "red" ? "selected" : "")
						}
						onClick={() => HandleLight("red")}></div>
					<div
						className={
							"light orange bg-warning rounded-circle " +
							(color === "orange" ? "selected" : "")
						}
						onClick={() => HandleLight("orange")}></div>
					<div
						className={
							"light green bg-success rounded-circle " +
							(color === "green" ? "selected" : "")
						}
						onClick={() => HandleLight("green")}></div>
				</div>
			</div>

			<div className="row">
				<div className="col-12 d-flex justify-content-center px-0 py-2">
					<button
						type="button"
						className="btn btn-sm btn-primary shadow-none"
						onClick={ActivateColors}>
						<strong>Activate</strong> lights
					</button>
				</div>
			</div>
		</div>
	);
};

export default TrafficLight;
