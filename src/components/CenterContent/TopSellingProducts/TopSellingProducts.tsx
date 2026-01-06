import { commonStyles } from "../../../commonStyles";
import { topSellingProductsStyles } from "./styles";

interface Product {
  name: string;
  price: string;
  quantity: number;
  amount: string;
}

const products: Product[] = [
  {
    name: "ASOS Ridley High Waist",
    price: "$79.49",
    quantity: 82,
    amount: "$6,518.18",
  },
  {
    name: "Marco Lightweight Shirt",
    price: "$128.50",
    quantity: 37,
    amount: "$4,754.50",
  },
  {
    name: "Half Sleeve Shirt",
    price: "$39.99",
    quantity: 64,
    amount: "$2,559.36",
  },
  {
    name: "Lightweight Jacket",
    price: "$20.00",
    quantity: 184,
    amount: "$3,680.00",
  },
  {
    name: "Marco Shoes",
    price: "$79.49",
    quantity: 64,
    amount: "$1,965.81",
  },
];

const TopSellingProducts = () => {
  return (
    <div style={topSellingProductsStyles.container}>
      <span
        style={{
          ...commonStyles.sectionTitle,
          ...topSellingProductsStyles.title,
          paddingTop: "24px",
        }}
      >
        Top Selling Products
      </span>
      <table style={topSellingProductsStyles.table}>
        <thead style={topSellingProductsStyles.tableHeader}>
          <tr>
            <th style={topSellingProductsStyles.headerCell}>Name</th>
            <th style={topSellingProductsStyles.headerCell}>Price</th>
            <th style={topSellingProductsStyles.headerCell}>Quantity</th>
            <th style={topSellingProductsStyles.headerCell}>Amount</th>
          </tr>
        </thead>
        <tbody style={topSellingProductsStyles.tableBody}>
          {products.map((product, index) => (
            <tr
              key={index}
              style={{
                ...topSellingProductsStyles.tableRow,
                ...(index === products.length - 1
                  ? topSellingProductsStyles.tableRowLast
                  : {}),
              }}
            >
              <td style={topSellingProductsStyles.nameCell}>{product.name}</td>
              <td style={topSellingProductsStyles.priceCell}>
                {product.price}
              </td>
              <td style={topSellingProductsStyles.quantityCell}>
                {product.quantity}
              </td>
              <td style={topSellingProductsStyles.amountCell}>
                {product.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopSellingProducts;
