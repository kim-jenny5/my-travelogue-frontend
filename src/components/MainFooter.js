import React from "react";
import { Envelope, LinkedInV1Fill, GithubFill } from "akar-icons";

export const MainFooter = () => {
	return (
		<div className="footer main">
			<div className="container">
				<Envelope strokeWidth={2} size={18} className="icon-css" />
				<LinkedInV1Fill strokeWidth={2} size={18} className="icon-css" />
				<GithubFill strokeWidth={2} size={18} className="icon-css" />
				<span className="copyright">© Jenny Kim, 2021</span>
			</div>
		</div>
	);
};
