

export const addItemToCart = (items, product) => {

    let cartItem = items.find(item => item.id === product.id);

    if (cartItem){
        return  items.map(item => {
            if (item.id === product.id){
                return { ...item, quantity: item.quantity + 1}
            }
            return item
        });
    }

    return [...items, {...product, quantity: 1}]
};
