import React from "react";
import { Envelope, LinkedInV1Fill, GithubFill } from "akar-icons";

export const MainFooter = () => {
	return (
		<div className="footer main">
			<div className="container">
				<a href="mailto:jennykimdev@gmail.com" target="_blank">
					<Envelope strokeWidth={2} size={18} className="icon-css" />
				</a>
				<a href="https://www.linkedin.com/in/kim-jenny5/" target="_blank">
					<LinkedInV1Fill strokeWidth={2} size={18} className="icon-css" />
				</a>
				<a href="https://github.com/kim-jenny5" target="_blank">
					<GithubFill strokeWidth={2} size={18} className="icon-css" />
				</a>
				<span className="copyright">© Jenny Kim, 2021</span>
			</div>
		</div>
	);
};
