import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const Login = () => {
	const { SignIn, googleSignIn, setLoading } = useContext(AuthContext);
	const Navigate = useNavigate();
	const location = useLocation();
	const from = location.from?.state?.pathname || "/";

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		SignIn(email, password)
			.then((res) => {
				const user = res.user;
				setLoading(true);
			})
			.catch((err) => console.error(err));
	};
	const handleGoogleSignIn = (e) => {
		e.preventDefault();
		googleSignIn()
			.then((result) => {
				const user = result.user;
				console.log(user);
				Navigate(from, { replace: true });
				setLoading(true);
			})
			.catch((err) => console.log(err.message));
	};
	return (
		<section className="w-96 m-4 rounded-md mx-auto ">
			<Helmet>
				<title>Dentist Jishan-Sign In</title>
				<meta name="description" content="This Sign in Page" />
				<meta name="keywords" content="Dental, Service, Doctor, Teeth" />
			</Helmet>

			<div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-300 text-gray-800">
				<div className="mb-6 text-center">
					<h1 className="my-3 text-4xl font-bold">Sign in</h1>
					<p className="text-sm text-gray-600">
						Sign in to access your account
					</p>
				</div>
				<form
					onSubmit={handleSubmit}
					className="space-y-12 ng-untouched ng-pristine ng-valid"
				>
					<div className="space-y-4">
						<div>
							<label htmlFor="email" className="block mb-2 text-left text-sm">
								Email address
							</label>
							<input
								type="text"
								name="email"
								id="email"
								placeholder="user@usersite.com"
								className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
							/>
						</div>
						<div>
							<div className="flex justify-between mb-2">
								<label htmlFor="password" className="text-sm">
									Password
								</label>
							</div>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="Your password"
								className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
							/>
						</div>
					</div>
					<div className="space-y-2">
						<div>
							<button
								type="submit"
								className="w-full px-4 py-2 font-semibold rounded-md bg-green-600 text-gray-50"
							>
								Sign in
							</button>
						</div>
						<p className="px-2 text-sm text-center text-gray-600">
							Don't have an account yet?
							<Link to="/signup" className="hover:underline text-green-600">
								Sign up
							</Link>
							.
						</p>
					</div>
					<hr className="" />
					<div className="-mt-6 space-y-2 flex flex-col justify-center items-center align-middle">
						<h2>Or Login Using </h2>
						<div className="flex justify-around items-center">
							<button className="mr-4">
								<AiFillFacebook size={"24px"}></AiFillFacebook>
							</button>
							<button onClick={handleGoogleSignIn}>
								<FcGoogle size={"24px"}></FcGoogle>
							</button>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Login;
