import userRouter from "./user.route.js";
import { Router } from "express";
import chatRoutes from "./chat.route.js";

const appRouter = Router();

appRouter.use("/user", userRouter); //domain/api/v1/user
appRouter.use("/chat", chatRoutes); //domain/api/v1/chats

export default appRouter;