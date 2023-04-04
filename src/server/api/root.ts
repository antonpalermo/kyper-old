import { createTRPCRouter } from "@kyper/server/api/trpc"
import { taskRouter } from "@kyper/server/api/routers/task"

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  task: taskRouter
})

// export type definition of API
export type AppRouter = typeof appRouter
