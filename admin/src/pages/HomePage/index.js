import Adminheader from "../../components/admin_header";
const HomePage = () => {
  return (
    <body>
      <Adminheader />
      <div class="container2">
        <div class="content">
          <h1 class="content-title" id="content-title">
            Users
          </h1>
          <a class="add_product_button" href="add-product.html">
            Add product
          </a>
          <a class="home" href="../index.html">
            home
          </a>

          <div class="table-container">
            <table>
              <thead id="thead"></thead>
              <tbody id="tbody"></tbody>
            </table>
          </div>
        </div>
      </div>
    </body>
  );
};

export default HomePage;
