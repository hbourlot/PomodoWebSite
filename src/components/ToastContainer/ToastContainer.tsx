import React from "react";
import { Bounce, ToastContainer } from "react-toastify";

type toastWrapperProps = {
	children: React.ReactNode;
};

export function ToastWrapper({ children }: toastWrapperProps) {
	return (
		<>
			{children}
			<ToastContainer
				position="top-center"
				autoClose={2000}
				hideProgressBar={false}
				closeOnClick={false}
				rtl={false}
				transition={Bounce}
			/>
		</>
	);
}
