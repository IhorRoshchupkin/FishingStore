import "bootstrap/dist/css/bootstrap.min.css";
import "./userAccount.css";
import "react-toastify/dist/ReactToastify.css";
import PersonIcon from "../../assets/icons/Person.png";
import AddIcon from "../../assets/icons/Add.png";
import OrdersIcon from "../../assets/icons/Orders.png";
import PromoCodeIcons from "../../assets/icons/PromoCodes.png";
import LoyaltyProgramIcon from "../../assets/icons/LoyaltyProgram.png";

const UserAccount = () => {
  return (
    <div className="row">
      <div className="col-sm-6 mb-3 mb-sm-0">
        <div className="card">
          <div className="card-body">
            <img
              src={PersonIcon}
              className="img-fluid mb-3"
              alt="Personal data icon"
            />
            <h5 className="card-title">Personal Data</h5>
            <p className="card-text">
              Here you can check or change your personal data, add new delivery
              addresses to use when placing an order and change the currency and
              language of the shop.
            </p>
            <a href="#" className="btn btn-primary">
              Edit data
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <img
              src={OrdersIcon}
              className="img-fluid mb-3"
              alt="Orders icon"
            />
            <h5 className="card-title">Orders</h5>
            <p className="card-text">
              A section where you can track the progress of your current orders,
              manage payments and view the orders we have already completed.
            </p>
            <a href="#" className="btn btn-primary">
              Check orders
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <img
              src={PromoCodeIcons}
              className="img-fluid mb-3"
              alt="Promo Codes icon"
            />
            <h5 className="card-title">Promo Codes</h5>
            <p className="card-text">
              View and manage your promo codes. Apply discounts at checkout and
              save on your purchases.
            </p>
            <a href="#" className="btn btn-primary">
              View Codes
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <img
              src={LoyaltyProgramIcon}
              className="img-fluid mb-3"
              alt="Personal data icon"
            />
            <h5 className="card-title">Loyalty Program</h5>
            <p className="card-text">
              Join our loyalty program to earn points with every purchase. Track
              your rewards and enjoy exclusive member benefits.
            </p>
            <a href="#" className="btn btn-primary">
              My Rewards
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <img
              src={AddIcon}
              className="img-fluid mb-3"
              alt="Personal data icon"
            />
            <h5 className="card-title">Add product</h5>
            <p className="card-text">
              Enter product info and publish it to the store.
            </p>
            <a href="#" className="btn btn-primary">
              Add
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
