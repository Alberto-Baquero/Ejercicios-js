const products = [
    {name: 'Gorra de rodilla', sellCount: 10},
    {name: 'Pantalón de pana', sellCount: 302},
    {name: 'Reloj de papel albal', sellCount: 23},
    {name: 'Inpar de zapatos', sellCount: 6}];

    let totalSellCount = 0;

for (const product of products) {
  totalSellCount += product.sellCount;
  console.log("Total de las ventas:", totalSellCount);
}

const media = totalSellCount / products.length;

console.log("Media de precios de venta:", media);