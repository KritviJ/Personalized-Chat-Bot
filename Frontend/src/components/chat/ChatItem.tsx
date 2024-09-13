import { Avatar, Box, Typography } from "@mui/material";
import { useAuth } from '../../context/AuthContext';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
function extractCodeFromString(message: string) {
    if (message.includes("```")) {
        const blocks = message.split("```");
        return blocks;
    }
}
function isCodeBlock(str: string) {
    if (
        str.includes("=") ||
        str.includes(";") ||
        str.includes("[") ||
        str.includes("]") ||
        str.includes("{") ||
        str.includes("}") ||
        str.includes("#") ||
        str.includes("//")
    ) {
        return true;
    }
    return false;
}
const ChatItem = ({
    content,
    role,
}: {
    content: string;
    role: "user" | "assistant";
}) => {
    const messageBlock = extractCodeFromString(content);
    const auth = useAuth();
    return role === "assistant" ? (
        <Box
            sx={{
                display: "flex",
                p: 2,
                bgcolor: "#004d5612",
                my: 2,
                gap: 2
            }
            }
        >
            <Avatar sx={{ ml: "0" }} >
                <img src="openai.jpg" alt="openai" width="40px" style={{ filter: "invert(100%)" }} />
            </Avatar>
            <Box>
                {!messageBlock && (
                    <Typography fontSize={"20px"}>
                        {content}
                    </Typography>)}
                {messageBlock && messageBlock.length && messageBlock.map((block) =>
                    isCodeBlock(block) ? (
                        <SyntaxHighlighter
                            style={coldarkDark}
                            language="javascript"
                        >
                            {block}
                        </SyntaxHighlighter>
                    ) : (
                        <Typography fontSize={"20px"}>
                            {block}
                        </Typography>
                    )
                )}
            </Box>
        </Box>
    ) : (
        <Box
            sx={{
                display: "flex",
                p: 2,
                bgcolor: "#004d56",
                gap: 2,
                my: 2
            }
            }
        >
            <Avatar sx={{ ml: "0", bgcolor: "black", color: "white" }}>
                {auth?.user?.name[0]}
                {auth?.user?.name.split(" ")[1][0]}
            </Avatar>
            <Box>
                <Typography fontSize={"20px"}>
                    {content}
                </Typography>
            </Box>
        </Box>
    );
};

export default ChatItem;