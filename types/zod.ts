import { z } from "zod";

export const authBody = z.object({
  id: z.string().nonempty(),
  username: z.string().nonempty(),
  account_type: z.string().nonempty(),
  token: z.string().nonempty(),
});
