import Link from "next/link";

export default function HomePage() {
  const products = [
     {
      id: 1,
      name: "Laptop ASUS ROG Strix G15",
      brand: "ASUS",
      oldPrice: "Rp 22.000.000",
      price: "Rp 18.500.000",
      rating: 4.9,
      image: "https://www.notebookcheck.net/fileadmin/_processed_/9/9/csm_aIEtRvLk_cca3fbaac1.jpg"
    },
    {
      id: 2,
      name: "MacBook Pro 14 Inch",
      brand: "Apple",
      oldPrice: "Rp 50.000.000",
      price: "Rp 25.900.000",
      rating: 4.8,
      image: "https://shopdunk.com/images/uploaded/MacBook/macbook-pro-14-inch-2023.jpg"
    },
    {
      id: 3,
      name: "Mouse Gaming Logitech G502",
      brand: "Logitech",
      price: "Rp 1.299.000",
      rating: 4.6,
      image: "https://i.pcmag.com/imagery/reviews/04QSGMRR0ddVFZCJ8lEU9gq-1.fit_lim.size_1600x1200.v_1569469984.jpg"
    },
    {
      id: 4,
      name: "Keyboard Mechanical RGB",
      brand: "Razer",
      price: "Rp 1.750.000",
      rating: 4.7,
      image: "https://robots.net/wp-content/uploads/2023/09/8-amazing-rgb-mechanical-keyboard-for-2023-1693657908.jpg"
    },
    {
    id: 5,
    name: "Printer Canon Inkjet",
    brand: "Canon",
    price: "Rp 1.900.000",
    rating: 4.4,
    image: "https://i.pcmag.com/imagery/reviews/05vwYWw9jJGgosyCXYWKCtZ-6.fit_scale.size_760x427.v1680108911.jpg"
  },
  {
  id: 6,
  name: "USB Hub Type-C",
  brand: "Baseus",
  oldPrice: "Rp 500.000",
  price: "Rp 329.000",
  rating: 4.6,
  image: "https://m.media-amazon.com/images/I/61QbS525pgL._AC_.jpg"
},
{
    id: 7,
    name: "Kamera Mirrorless Sony",
    brand: "Sony",
    price: "Rp 11.500.000",
    rating: 4.7,
    image: "https://www.dpreview.com/files/p/articles/7686672267/Product-Images/Sony_a6700_3qtr_right.jpeg"
},
  {
    id: 8,
    name: "Flashdisk SanDisk 128GB",
    brand: "SanDisk",
    price: "Rp 249.000",
    rating: 4.5,
    image: "https://www.bhphotovideo.com/images/images1000x1000/sandisk_sdcz73_128g_a46_128gb_ultra_flair_usb_1203369.jpg"
  },
  {
    id: 10,
    name: "Powerbank Anker 20000mAh",
    brand: "Anker",
    price: "Rp 799.000",
    rating: 4.7,
    image: "https://blog.easyacc.com/wp-content/uploads/2020/12/e774d-anker-20000-mah-power-bank.jpg"
  },
  {
    id: 11,
    name: "Tablet Samsung Galaxy Tab",
    brand: "Samsung",
    price: "Rp 5.200.000",
    rating: 4.6,
    image: "https://images.samsung.com/is/image/samsung/assets/se/tablets/galaxy-tab-s10/buy/02-image-gallery/S10_APS_KV_PC_1600x864.jpg?imbypass=true"
  },
{
    id: 12,
    name: "Apple Watch Series",
    brand: "Apple",
    price: "Rp 6.500.000",
    rating: 4.8,
    image: "https://assets-prd.ignimgs.com/2023/09/12/applewatch-s9-news-1694540296440.jpg"
},
{
  id: 13,
  name: "PC Gaming RTX 3060",
  brand: "Custom Build",
  price: "Rp 18.900.000",
  rating: 4.9,
  image: "https://pcmarket.vn/media/product/10689_dsc02277.jpg"
},
  ];
  return (
    <main style={{ padding: "40px" }}>
      <h1>TechStore</h1>
      <p>Toko Elektronik Berbasis Web</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {products.map((item) => (
          <Link
            key={item.id}
            href={`/produk/${item.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "16px",
                cursor: "pointer",
                transition: "0.2s",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "160px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h3>{item.name}</h3>
              <p>{item.brand}</p>
              <strong>{item.price}</strong>
              <p>⭐ {item.rating}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
