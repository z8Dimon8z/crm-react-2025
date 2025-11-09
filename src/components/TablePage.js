import useModel from "./useModel";
import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectNav from "./ProjectNav";
import LeftPanel from "./LeftPanel";

const PRODUCTS = {
  "course-html": "Курс по верстке",
  "course-js": "Курс по JavaScript",
  "course-vue": "Курс по VUE JS",
  "course-php": "Курс по PHP",
  "course-wordpress": "Курс по WordPress",
};

const STATUSES = {
  new: { text: "Новый", class: "danger" },
  inwork: { text: "В работе", class: "warning" },
  complete: { text: "Завершенный", class: "success" },
};

const TablePage = () => {
  const { requests } = useModel();
  const history = useNavigate();

  const [activeStatus, setActiveStatus] = React.useState("all");
  const [activeProduct, setActiveProduct] = React.useState("all");

  const filteredRequests = requests.filter((request) => {
    const statusMatch =
      activeStatus === "all" || request.status === activeStatus;
    const productMatch =
      activeProduct === "all" || request.product === activeProduct;
    return statusMatch && productMatch;
  });

  const getStatusBadge = (status) => {
    const statusInfo = STATUSES[status];
    return (
      <div className={`badge badge-pill badge-${statusInfo.class}`}>
        {statusInfo.text}
      </div>
    );
  };

  return (
    <div className="with-nav body--dashboard">
      <ProjectNav />
      <LeftPanel
        activeStatus={activeStatus}
        setActiveStatus={setActiveStatus}
        requests={requests}
      />
      <div className="main-wrapper">
        <div className="container-fluid">
          <div className="admin-heading-1">
            {activeStatus === "all"
              ? "Все заявки"
              : activeStatus === "new"
              ? "Новые заявки"
              : activeStatus === "inwork"
              ? "Заявки в работе"
              : "Завершенные заявки"}
          </div>

          <div className="row mb-3 justify-content-start">
            <div className="col">
              <div className="btn-group" role="group">
                <button
                  type="button"
                  className={`btn btn-light ${
                    activeStatus === "all" ? "active" : ""
                  }`}
                  onClick={() => setActiveStatus("all")}
                >
                  Все
                </button>
                <button
                  type="button"
                  className={`btn btn-light ${
                    activeStatus === "new" ? "active" : ""
                  }`}
                  onClick={() => setActiveStatus("new")}
                >
                  Новые
                </button>
                <button
                  type="button"
                  className={`btn btn-light ${
                    activeStatus === "inwork" ? "active" : ""
                  }`}
                  onClick={() => setActiveStatus("inwork")}
                >
                  В работе
                </button>
                <button
                  type="button"
                  className={`btn btn-light ${
                    activeStatus === "complete" ? "active" : ""
                  }`}
                  onClick={() => setActiveStatus("complete")}
                >
                  Завершенные
                </button>
              </div>
            </div>
            <div className="col">
              <select
                className="custom-select"
                value={activeProduct}
                onChange={(e) => setActiveProduct(e.target.value)}
              >
                <option value="all">Все продукты</option>
                <option value="course-html">Курс по верстке</option>
                <option value="course-js">Курс по JavaScript</option>
                <option value="course-vue">Курс по VUE JS</option>
                <option value="course-php">Курс по PHP</option>
                <option value="course-wordpress">Курс по WordPress</option>
              </select>
            </div>
          </div>

          <table className="table fs-14">
            <thead>
              <tr>
                <th>ID</th>
                <th>дата</th>
                <th>продукт</th>
                <th>имя</th>
                <th>email</th>
                <th>телефон</th>
                <th>статус</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.map((request) => (
                <tr key={request.id}>
                  <th scope="row">{request.id}</th>
                  <td>{request.date}</td>
                  <td>{PRODUCTS[request.product]}</td>
                  <td>{request.name}</td>
                  <td>{request.email}</td>
                  <td>{request.phone}</td>
                  <td>{getStatusBadge(request.status)}</td>
                  <td>
                    <Link to={`/edit/${request.id}`}>Редактировать</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TablePage;
