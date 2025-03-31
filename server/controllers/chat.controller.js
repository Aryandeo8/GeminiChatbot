import { asyncHandler } from "../utils/asynchandler.js";
import { ApiError } from "../utils/apiError.js";
import { User } from "../models/user.model.js";
import { ai } from "../config/gemini.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const generateChatCompletion = asyncHandler(async (req, res) => {
    const { messages } = req.body;

    if (!messages) {
        throw new ApiError(400, "No messages provided");
    }

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: messages,
        });
        res.status(200).json(response);
    } catch (error) {
        throw new ApiError(500, `Failed to generate chat completion: ${error.message}`);
    }
});

export const sendChatsToUser = asyncHandler(async (req, res) => {
    try {
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            throw new ApiError(401, "User not registered OR Token malfunctioned");
        }
        if (user._id.toString() !== res.locals.jwtData.id) {
            throw new ApiError(403, "Permissions didn't match");
        }

        res.status(200).json(
            new ApiResponse(200, user.chats, "OK")
        );
    } catch (error) {
        throw new ApiError(500, `Failed to send chats to user: ${error.message}`);
    }
});

export const deleteChats = asyncHandler(async (req, res) => {
    try {
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            throw new ApiError(401, "User not registered OR Token malfunctioned");
        }
        if (user._id.toString() !== res.locals.jwtData.id) {
            throw new ApiError(403, "Permissions didn't match");
        }

        user.chats = [];
        await user.save();

        res.status(200).json({ message: "OK" });
    } catch (error) {
        throw new ApiError(500, `Failed to delete chats: ${error.message}`);
    }
});
