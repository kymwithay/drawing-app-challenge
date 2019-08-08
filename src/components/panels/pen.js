import React from "react";

export default function Pen({penOptions, setPenOptions}) {

	return(
		<div>
			<h1>Pen</h1>
			<section>
				<label>
					<h2>Stroke Color:</h2>
					<div className="stroke-color-picker">
						<input
							type="color"
							value={penOptions.strokeWidth}
							onChange={e => setPenOptions({...penOptions, strokeWidth: e.target.value})}
							name="stroke-width"
					/>
				</div>
		</label>
			</section>
			<section>
				<label>
					<h2>Stroke Width:</h2>
					<div className="stroke-width-slider">
						<input
							type="range"
							min="1"
							max="100"
							value="50" class="slider"
							value={penOptions.strokeWidth}
							onChange={e => setPenOptions({...penOptions, strokeWidth: e.target.value})}
							name="stroke-width"
					/>
				</div>
		</label>
			</section>
			<section>
				<h2>Line Type:</h2>
				<div className="line-types">
					<label>
						<input
							type="radio"
							value="solid"
							onChange={e => setPenOptions({...penOptions, lineType: "solid"})}
							checked={penOptions.lineType === "solid"}
						/>
						<span className="line-types__option">Solid</span>
					</label>
					<label>
						<input
							type="radio"
							value="dash"
							onChange={e => setPenOptions({...penOptions, lineType: "dash"})}
							checked={penOptions.lineType === "dash"}
						/>
						<span className="line-types__option">Dashed</span>
					</label>
					<label>
						<input
							type="radio"
							value="dot"
							onChange={e => setPenOptions({...penOptions, lineType: "dot"})}
							checked={penOptions.lineType === "dot"}
						/>
						<span className="line-types__option">Dotted</span>
					</label>
				</div>
			</section>
		</div>
	);
}
