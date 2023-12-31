export default function Die(props: { value: number, index: number, isHeld: boolean, holdToggle: () => void }): React.ReactNode {
	return (
		<div
			className={props.isHeld ? `die-face held die-${props.value}` : `die-face die-${props.value}`}
			onClick={(_) => props.holdToggle()}
		>
			<h2>{props.value}</h2>
		</div>
	);
}