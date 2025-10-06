import { createAuthClient } from "better-auth/react";
import { adminClient } from "better-auth/client/plugins";

// So here i have added the admin plugin:
export const authClient = createAuthClient({ plugins: [adminClient()] });

export const { signIn, signUp, useSession } = createAuthClient();
