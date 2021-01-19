import {AllProducts, getProductById, Router} from "../deps.ts";

export const router = new Router();

router
    .get("/products", (context) => {
        context.response.body = AllProducts();
    })
    .get("/products/:id", (context) => {
        if (context.params && context.params.id) {
            context.response.body = getProductById(context.params.id);
        }
    });


