import React from "react";
import AdminNav from "./AdminNav";
import AdminCard from "./AdminCard";
import Token from "./Token";
import Transfer from "./Transfer";
import Pool from "./Pool";
import Staking from "./Staking";
import ICOToken from "./ICOToken";

const Admin = ({
  poolDetails,
  transferToken,
  address,
  setLoader,
  createPool,
  sweep,
  setModifyPoolID,
}) => {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <AdminNav />
          <div className="col-12 col-lg-9">
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="tab-1"
                role="tabpanel"
              >
                <div className="row">
                  {
                    poolDetails?.poolInfoArray.map((pool, index)=>(
                      <AdminCard key={index} name={`Current APY: ${pool.apy}`}/>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
