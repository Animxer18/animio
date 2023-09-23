import React from "react";

export const SkeletonLoader = () => {
	return (
		<div className="bg-gray-300 rounded-lg p-6 mb-4">
			<div className="animate-pulse flex flex-col justify-between">
				<div className="bg-gray-400 h-48 mb-4 rounded-lg"></div>
				<div className="bg-gray-400 h-4 w-3/4 mb-2"></div>
				<div className="bg-gray-400 h-3 w-1/2"></div>
			</div>
		</div>
	);
};
