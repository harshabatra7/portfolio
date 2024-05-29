import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="services section" id="services">
      <h2 className="section_title" style={{ textAlign: "center" }}>
        Services
      </h2>
      <div className="section_subtitle" style={{ textAlign: "center" }}>
        What i offer
      </div>

      <div className="services_container container grid">
        <div className="services_content">
          <div>
            <i class="fa-solid fa-bars-progress service_icon"></i>
            <h3 className="services_title">
              Product <br /> Designer
            </h3>
          </div>

          <span
            className="services_button"
            onClick={() => {
              toggleTab(1);
            }}
          >
            View More{" "}
            <i class="fa-solid fa-arrow-right service_button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services_model active_model"
                : "services_model"
            }
          >
            <div className="services_model_content">
              <i
                class="fa-solid fa-xmark services_model_close"
                onClick={() => {
                  toggleTab(0);
                }}
              ></i>
              <h3 className="services_model_title">Product Designer</h3>
              <p className="services_model-description">
                Providing quality work to clients and companies.
              </p>

              <ul className="services_model-services grid">
                <li className="services_model-service">
                  <i class="fa-solid fa-clock"></i>
                  <p className="services_model-info">
                    I develop the user interface
                  </p>
                </li>
                <li className="services_model-service">
                  <i class="fa-solid fa-clock"></i>
                  <p className="services_model-info">Web page development</p>
                </li>
                <li className="services_model-service">
                  <i class="fa-solid fa-clock"></i>
                  <p className="services_model-info">
                    I create ux element interactions
                  </p>
                </li>
                <li className="services_model-service">
                  <i class="fa-solid fa-clock"></i>
                  <p className="services_model-info">
                    Design and mockups of products for companies
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <i class="fa-solid fa-code service_icon"></i>
            <h3 className="services_title">
              UI/UX <br /> Designer
            </h3>
          </div>

          <span
            className="services_button"
            onClick={() => {
              toggleTab(2);
            }}
          >
            View More{" "}
            <i class="fa-solid fa-arrow-right service_button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services_model active_model"
                : "services_model"
            }
          >
            <div className="services_model_content">
              <i
                class="fa-solid fa-xmark services_model_close"
                onClick={() => {
                  toggleTab(0);
                }}
              ></i>
              <h3 className="services_model_title">Ui/Ux Designer</h3>
              <p className="services_model-description">
                Providing quality work to clients and companies.
              </p>

              <ul className="services_model-services grid">
                <li className="services_model-service">
                  <i class="fa-solid fa-clock"></i>
                  <p className="services_model-info">
                    I develop the user interface
                  </p>
                </li>
                <li className="services_model-service">
                  <i class="fa-solid fa-clock"></i>
                  <p className="services_model-info">Web page development</p>
                </li>
                <li className="services_model-service">
                  <i class="fa-solid fa-clock"></i>
                  <p className="services_model-info">
                    I create ux element interactions
                  </p>
                </li>
                <li className="services_model-service">
                  <i class="fa-solid fa-clock"></i>
                  <p className="services_model-info">
                    Design and mockups of products for companies
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Services;
