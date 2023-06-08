import { initTRPC } from "@trpc/server";
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { notifyBranchUpdate } from "./procedures/notifyBranchUpdate";

export const t = initTRPC.create();
export const { router, procedure } = t;

const appRouter = router({
	userCreate: notifyBranchUpdate,
});

export type AppRouter = typeof appRouter;

const server = createHTTPServer({
	router: appRouter,
});

server.listen(3000);
