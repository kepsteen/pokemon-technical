interface LoadingSpinnerProps {
	size?: "small" | "medium" | "large";
}

const LoadingSpinner = ({ size = "medium" }: LoadingSpinnerProps) => {
	const sizeClasses = {
		small: "h-6 w-6",
		medium: "h-12 w-12",
		large: "h-16 w-16",
	};

	return (
		<div className="flex justify-center items-center h-64">
			<div
				className={`animate-spin rounded-full border-t-2 border-b-2 border-red-600 ${sizeClasses[size]}`}
			></div>
		</div>
	);
};

export default LoadingSpinner;
