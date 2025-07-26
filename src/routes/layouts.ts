// https://supun.io/sveltekit-static-redirects

import { redirect } from "@sveltejs/kit";
import { APP_REDIRECTS } from "../redirects";

export async function load({ url }: { url: URL }) {
    const pathname = url.pathname;
    if (APP_REDIRECTS.hasOwnProperty(pathname)) {
        return redirect(301, (APP_REDIRECTS as any)[pathname]);
    }
}
