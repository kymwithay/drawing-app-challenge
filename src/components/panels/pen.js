import React from "react";

export default function Pen({penOptions, setPenOptions}) {

	return(
		<div>
			<h1>Pen</h1>
			<section>
				<label>
					<h3>Stroke Color:</h3>
						<input
							type="color"
							value={penOptions.color}
							onChange={e => setPenOptions({...penOptions, color: e.target.value})}
							name="stroke-width"
					/>
		</label>
			</section>

			<section>
				<label>
					<h3>Stroke Width:{penOptions.strokeWidth}</h3>
						<input
							type="range"
							min="1"
							max="100"
							value="50" class="slider"
							value={penOptions.strokeWidth}
							onChange={e => setPenOptions({...penOptions, strokeWidth: e.target.value})}
							name="stroke-width"
					/>
		</label>
			</section>

			<section>
				<h3>Line Type:</h3>
				<div className="line-types">
						<input
							id="option1"
							type="radio"
							value="solid"
							onChange={e => setPenOptions({...penOptions, lineType: "solid"})}
							checked={penOptions.lineType === "solid"}
						/>
						<label for="option1">
						<span className="line-types__option">Solid</span>
					</label>
						<input
							id="option2"
							type="radio"
							value="dash"
							onChange={e => setPenOptions({...penOptions, lineType: "dash"})}
							checked={penOptions.lineType === "dash"}
						/>
						<label for="option2">
							<span className="line-types__option">Dashed</span>
					</label>
						<input
							id="option3"
							type="radio"
							value="dot"
							onChange={e => setPenOptions({...penOptions, lineType: "dot"})}
							checked={penOptions.lineType === "dot"}
						/>
						<label for="option3">
						<span className="line-types__option">Dotted</span>
					</label>
				</div>
			</section>
		</div>
	);
}
