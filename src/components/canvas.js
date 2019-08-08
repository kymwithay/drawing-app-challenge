import React, { useRef, useState, useEffect } from "react";

export default function Canvas({activeTool, penOptions}) {
	const canvasRef = useRef(null);

	const [isDrawing, setIsDrawing] = useState(false);
	const [ctx, setCtx] = useState(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		setCtx(canvas.getContext("2d"));
	}, []);

	// erases canvas
	useEffect(() => {
		const canvas = canvasRef.current;
		const clearbutton = document.getElementById('clear-button');

		if (clearbutton) {
			clearbutton.addEventListener('click', () => {
				ctx.clearRect(0, 0, canvas.width, canvas.height);
			});
		}
	})

	const getX = (event) => {
		if (event.pageX === undefined) {
			return event.targetTouches[0].pageX - canvasRef.current.offsetLeft;
		}
		else {
			return event.pageX - canvasRef.current.offsetLeft;
		}
	};

	const getY = (event) => {
		if (event.pageY === undefined) {
			return event.targetTouches[0].pageY - canvasRef.current.offsetTop;
		}
		else {
			return event.pageY - canvasRef.current.offsetTop;
		}
	};

	const start = (event) => {
		if (activeTool === "pen") {
			setIsDrawing(true);
			ctx.strokeStyle = penOptions.color;
			ctx.beginPath();
			ctx.setLineDash(getStyleofLine(penOptions.lineType));
			ctx.moveTo(getX(event), getY(event));
			event.preventDefault();
		}

		else if (activeTool === "eraser") {
			setIsDrawing(true);
			ctx.strokeStyle = "#ffffff";
			ctx.beginPath();
			ctx.setLineDash([]);
			ctx.moveTo(getX(event), getY(event));
			event.preventDefault();
		}

	};

	const draw = (event) => {
		if (isDrawing) {
			ctx.lineTo(getX(event), getY(event));
			ctx.lineWidth = penOptions.strokeWidth;
			ctx.lineJoin = "round";
			ctx.stroke();
		}
		event.preventDefault();
	};

	const getStyleofLine = (lineType) => {
		let strokeWidth = penOptions.strokeWidth;
			if (lineType === "solid") {

				return [];

			} else if (lineType === "dash") {

				return [6 * strokeWidth, 1 * strokeWidth];

			} else {

			return [1.5 * strokeWidth, 1.5 * strokeWidth];
		}
	}

	const end = (event) => {
		if (isDrawing) {
			ctx.stroke();
			ctx.closePath();
			setIsDrawing(false);
		}
		event.preventDefault();
	};

	return (
		<canvas
			width={window.innerWidth - 262}
			height={window.innerHeight}
			className="canvas"
			ref={canvasRef}
			onMouseDown={start}
			onMouseMove={draw}
			onMouseUp={end}
		/>
	);
}
