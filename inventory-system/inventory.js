import products from "./products.js";

export function addStock({ id, qty }, items = products) {
    if (qty <= 0) {
        throw new Error("Addition quantity must be positive");
    }

    return items.map((item) => {
        if (item.id === id) {
            return {
                ...item,
                qty: item.qty + qty
            };
        }
        return item;
    });
}

export function removeStock({ id, qty }, items = products) {
    return items.map((item) => {
        if (item.id === id) {
            if (qty <= 0) {
                throw new Error("Removal quantity must be positive");
            }


            if (item.qty < qty) {
                throw new Error("Insufficient stock");
            }

            return {
                ...item,
                qty: item.qty - qty
            };
        }
        return item;
    });
}


export function lowStock(threshold = 5, items = products) {
    return items.filter((item) => item.qty < threshold);
}