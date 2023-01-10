import React from "react";
import { RxAvatar } from "react-icons/rx";
import { BsFillTrashFill } from "react-icons/bs";

const ReviewRow = ({ eachReview, handleDelete, handleUpdateStatus }) => {
	const { _id, name, email, photoURL, comment, commentDate, status } =
		eachReview;

	return (
		<div>
			<tr>
				<td>
					<div className="flex gap-2 items-center space-x-3">
						<div className="avatar">
							<div className="mask mask-squircle w-12 h-12">
								{photoURL ? (
									<img src={photoURL} alt={name} />
								) : (
									<>
										<RxAvatar></RxAvatar>
									</>
								)}
							</div>
						</div>
						<div>
							<div className="font-bold">{name}</div>
							<div className="text-sm opacity-50">{email}</div>
						</div>
					</div>
				</td>
				<td className="md:table-fixed">
					<div className="w-96 h-10 text-justify mx-4 px-10 ">
						<h5>{comment}</h5>
					</div>
				</td>
				<td>{commentDate}</td>
				<th>
					<div className="flex justify-end items-end">
						<button
							className="btn btn-success mr-4"
							onClick={() => handleUpdateStatus(_id)}
						>
							{status ? status : "pending"}
						</button>
						<button
							onClick={() => handleDelete(_id)}
							className="btn btn-square btn-success"
						>
							<BsFillTrashFill
								size={"24px"}
								className="text-black-500 hover:text-red-500"
							></BsFillTrashFill>
						</button>
					</div>
				</th>
			</tr>
		</div>
	);
};

export default ReviewRow;
