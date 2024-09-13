import User from "../models/User.js";
export const generateChatCompletion = async (req, res, next) => {
    const { message } = req.body;
    try {
        const user = await User.findById(res.locals.jwtData.id);
        if (!user)
            return res.status(401).json({ message: "User Not Registered or Token Malfunction" });
        const chats = user.chats.map(({ role, content }) => ({
            role,
            content
        }));
        chats.push({ content: message, role: "user" });
        user.chats.push({ content: message, role: "user" });
        // const openai = new OpenAI({
        //     apiKey: process.env.OPEN_AI_SECRET,
        //     organization: process.env.OPENAI_ORGANIZATION_ID,
        // });
        // const chatResponse = await openai.chat.completions.create({
        //     model: "gpt-3.5-turbo",
        //     messages: chats,
        // });
        // user.chats.push(chatResponse.choices[0].message);
        // await user.save();
        // return res.status(200).json({ chats: user.chats });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something Went Wrong" });
    }
};
export const sendChatsToUser = async (req, res, next) => {
    try {
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            return res.status(401).send("User Not Registered or Token Malfunction");
        }
        console.log(user._id.toString(), res.locals.jwtData.id);
        if (user._id.toString() !== res.locals.jwtData.id) {
            return res.status(401).send("Permissions Didn't Match");
        }
        return res
            .status(200)
            .json({ message: "OK", chats: user.chats });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
export const deleteChats = async (req, res, next) => {
    try {
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            return res.status(401).send("User Not Registered or Token Malfunction");
        }
        console.log(user._id.toString(), res.locals.jwtData.id);
        if (user._id.toString() !== res.locals.jwtData.id) {
            return res.status(401).send("Permissions Didn't Match");
        }
        //@ts-ignore
        user.chats = [];
        await user.save();
        return res
            .status(200)
            .json({ message: "OK" });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
//# sourceMappingURL=chat-controllers.js.map