import { procedure } from "../index";
import { z } from "zod";

export const notifyBranchUpdate = procedure
	.input(z.object({ projectId: z.number(), branch: z.string() }))
	.mutation(async ({ input }) => {
		const { projectId, branch } = input;
		// ...
	});
