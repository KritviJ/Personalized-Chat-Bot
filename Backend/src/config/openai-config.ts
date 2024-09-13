import OpenAI from "openai";

export const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_SECRET,
    organization: process.env.OPENAI_ORGANIZATION_ID,
});