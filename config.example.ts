import { AppConfig } from "./src/types/appConfig";

/**
 * rename or create copy with name "config.ts"
 */

export const appConfig: AppConfig = {
	httpPort: 300,
	accessToken: "<access token>",
	gitlabUrl: "http://git.cum",
	projects: [
		{
			projectId: 1635,
			branches: "all",
		},
	],
};
