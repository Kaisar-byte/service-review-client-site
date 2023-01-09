import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
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
		const proceed = Swal.fire({
			title: "Do you want to delete this review ?",
			showDenyButton: true,
			showCancelButton: true,
			confirmButtonText: "Yes",
			denyButtonText: "No",
			customClass: {
				actions: "my-actions",
				cancelButton: "order-1 right-gap",
				confirmButton: "order-2",
				denyButton: "order-3",
			},
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire("You have successfully deleted this review", "", "success");
			} else if (result.isDenied) {
				Swal.fire("Changes are not saved", "", "info");
			}
		});

		// const proceed = window.confirm("Are you sure you want to delete this");
		if (proceed) {
			fetch(`http://localhost:5000/reviews/${id}`, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					if (data.deletedCount > 0) {
						// Swal.fire("Any fool can use a computer");
						const remaining = myreviews.filter(
							(indlReview) => indlReview._id !== id
						);
						setMyreviews(remaining);
					}
				})
				.catch((err) => console.error(err));
		}
	};

	const handleUpdateStatus = (id) => {
		fetch(`http://localhost:5000/reviews/${id}`, {
			method: "PATCH",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({ status: "Approved" }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount > 0) {
					const remaining = myreviews.filter((myrvw) => myrvw._id !== id);
					const approved = myreviews.find((myrvw) => myrvw._id === id);
					const totalReviews = [...remaining, approved];
					setMyreviews(totalReviews);
				}
			});
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
							handleUpdateStatus={handleUpdateStatus}
						></ReviewRow>
					))}
				</tbody>

				<tfoot></tfoot>
			</table>
		</div>
	);
};
export default Review;
