import React from "react";
import { Envelope, LinkedInV1Fill, GithubFill } from "akar-icons";

export const MainFooter = () => {
	return (
		<div className="footer main">
			<span className="container">
				<span className="icon-css">
					<Envelope strokeWidth={2} size={20} className="icon-padding" />
				</span>
				<span className="icon-css">
					<LinkedInV1Fill strokeWidth={2} size={20} className="icon-padding" />
				</span>
				<span className="icon-css">
					<GithubFill strokeWidth={2} size={20} className="icon-padding" />
				</span>
				<span>© Jenny Kim, 2021</span>
			</span>
		</div>
	);
};
