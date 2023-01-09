import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

import ReviewRow from "./ReviewRow";

const Review = () => {
	const { user } = useContext(AuthContext);
	const [myreviews, setMyreviews] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:5000/reviews?email=${user?.email}`)
			.then((res) => res.json())
			.then((data) => {
				setMyreviews(data);
			});
	}, [user?.email]);

	const handleDelete = (id) => {
		const proceed = window.confirm("Are you sure you want to delete this");
		if (proceed) {
			fetch(`http://localhost:5000/reviews/${id}`, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					if (data.deletedCount > 0) {
						alert("deleted successfully");
						const remaining = myreviews.filter(
							(indlReview) => indlReview._id !== id
						);
						setMyreviews(remaining);
					}
				})
				.catch((err) => console.error(err));
		}
	};

	return (
		<div className="w-full">
			<table className="table w-full">
				<thead>
					<tr>
						<th>Name</th>
						<th>email</th>
						<th>Commenting time </th>
						<th>Comment </th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{myreviews.map((eachReview) => (
						<ReviewRow
							key={eachReview._id}
							handleDelete={handleDelete}
							eachReview={eachReview}
						></ReviewRow>
					))}
				</tbody>

				<tfoot></tfoot>
			</table>
		</div>
	);
};
export default Review;
