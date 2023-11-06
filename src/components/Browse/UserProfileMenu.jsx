export default function UserProfileMenu() {
  return (
    <>
      <div className="dropdown">
        <button className="dropbtn hover:text-white">User</button>
        <div className="dropdown-content bg-black bg-opacity-50 py-5">
          <div className="flex justify-center py-5">
            <div className="flex">
              <div className="flex flex-col mx-16   ">
                <a href="" className=" hover:text-stone-400 my-1">
                  Account1
                </a>
                <a href="" className=" hover:text-stone-400 my-1">
                  Account2
                </a>
                <a href="" className=" hover:text-stone-400 my-1">
                  Account3
                </a>
                <a href="" className=" hover:text-stone-400 my-1">
                  Account4
                </a>

                <a href="" className=" hover:text-stone-400 my-1">
                  Kid Account
                </a>

                <a
                  href="/product?department=allproducts&category=outdoortables"
                  className=" hover:text-stone-400 my-1"
                >
                  Manage Profiles
                </a>

                <a
                  href="/product?department=allproducts&category=outdoorsofas"
                  className=" hover:text-stone-400 my-1"
                >
                  Transfer Profiles
                </a>
                <a
                  href="product?department=allproducts&category=lighting"
                  className=" hover:text-stone-400 my-1"
                >
                  Account
                </a>
                <a
                  href="product?department=allproducts&category=lighting"
                  className=" hover:text-stone-400 my-1"
                >
                  Help Center
                </a>

                <a
                  href="product?department=allproducts&category=lighting"
                  className=" hover:text-stone-400 my-1"
                >
                  Sign Out of Netflex
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
