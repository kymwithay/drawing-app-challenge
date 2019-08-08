import React from "react";

import PenIcon from "./icons/pen-icon";
import EraserIcon from "./icons/eraser-icon";
import SaveIcon from "./icons/save-icon";
import StampIcon from "./icons/stamp-icon";

export default function NavBar({activeTool, setActiveTool}) {
	return (
		<div className="nav-bar">
			<div
				className="nav-bar__tool"
				onClick={e => setActiveTool("pen")}
				title="Pen"
			>
				<PenIcon />
			</div>
			<div
				className="nav-bar__tool"
				onClick={e => setActiveTool("eraser")}
				title="Eraser"
			>
				<EraserIcon />
			</div>
			<div
				className="nav-bar__tool"
				onClick={e => setActiveTool("pen")}
				title="Pen"
			>
				<SaveIcon />
			</div>
			<div
				className="nav-bar__tool"
				onClick={e => setActiveTool("pen")}
				title="Pen"
			>
				<StampIcon />
			</div>
		</div>
	);
}
