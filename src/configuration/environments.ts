import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const schema = z.object({
    HOST: z.string().min(6).default("localhost"),
    PORT: z.coerce.number().int().positive().default(3000),
});

const parsed = schema.safeParse(process.env);

if (!parsed.success) {
    console.error("❌ Invalid environment variables:", JSON.stringify(parsed.error.format(), null, 4));
    process.exit(1);
}

export const Environments = parsed.data;
