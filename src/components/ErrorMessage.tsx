import { Link } from "react-router";

interface ErrorMessageProps {
	message: string;
	showHomeLink?: boolean;
}

const ErrorMessage = ({ message, showHomeLink = false }: ErrorMessageProps) => {
	return (
		<div className="text-center text-red-600 p-4">
			<h2 className="text-xl font-bold">Error</h2>
			<p>{message}</p>
			{showHomeLink && (
				<Link
					to="/"
					className="mt-4 inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
				>
					Back to Home
				</Link>
			)}
		</div>
	);
};

export default ErrorMessage;
