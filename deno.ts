import {Application, router, send} from "./deps.ts"

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (context) => {
    await send(context, context.request.url.pathname, {
        root: `${Deno.cwd()}/frontend/`,
        index: "index.html",
    });
});

app.addEventListener("listen", ({ hostname, port, secure }) => {
    console.log(
        `Listening on: ${secure ? "https://" : "http://"}${
            hostname ?? "localhost"
        }:${port}`
    );
});

await app.listen({ port: 8000 });
