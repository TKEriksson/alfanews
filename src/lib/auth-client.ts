import { createAuthClient } from "better-auth/react";
import { adminClient } from "better-auth/client/plugins";
import { stripeClient } from "@better-auth/stripe/client"

// So here i have added the admin plugin, and also stripe (from https://www.better-auth.com/docs/plugins/stripe)
export const authClient = createAuthClient(
  { 
    plugins: [
      adminClient(),
       stripeClient({
            subscription: true //if you want to enable subscription management
        })
    ] 
  }
);

export const { signIn, signUp, useSession } = createAuthClient();

