export type Project = {
	branches: (RegExp | string)[] | "all";
	projectId: number;
};

export type AppConfig = {
	gitlabUrl: string;
	accessToken: string;
	httpPort: number;
	projects: Project[];
};
