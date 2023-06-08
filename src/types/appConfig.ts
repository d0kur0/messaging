export type Project = {
	branches: (RegExp | string)[] | "all";
	projectId: number;
};

export type AppConfig = {
	baseGitlabUrl: string;
	projects: Project[];
};
