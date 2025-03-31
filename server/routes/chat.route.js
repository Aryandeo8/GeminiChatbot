import {Router} from 'express';
import {chatCompletionValidator, validate} from "../utils/validators.js"
import {verifyJWT} from "../middleware/auth.middleware.js"
import {
    deleteChats,
    generateChatCompletion,
    sendChatsToUser,
} from "../controllers/chat.controller.js";

const chatRoutes= Router();
chatRoutes.post(
    "/new",
    validate(chatCompletionValidator),
    verifyJWT,
    generateChatCompletion
);
chatRoutes.get("/all-chats", verifyJWT, sendChatsToUser);
chatRoutes.delete("/delete", verifyJWT, deleteChats);

export default chatRoutes;