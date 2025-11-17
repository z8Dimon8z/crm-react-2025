import { useParams, Link, useNavigate } from "react-router-dom";
import useModel from "./useModel";
import ProjectNav from "./ProjectNav";
import React from "react";

const EditPage = () => {
  const { id } = useParams();
  const { getRequest, updateRequest, deleteRequest } = useModel();
  const navigate = useNavigate();

  const request = getRequest(id);

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    product: "course-html",
    status: "new",
  });

  React.useEffect(() => {
    if (request) {
      setFormData({
        name: request.name,
        email: request.email,
        phone: request.phone,
        product: request.product,
        status: request.status,
      });
    }
  }, [request]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRequest(id, formData);
    alert("Изменения сохранены!");
    navigate("/table");
  };

  const handleDelete = () => {
    if (window.confirm("Вы уверены, что хотите удалить эту заявку?")) {
      deleteRequest(id);
      alert("Заявка удалена!");
      navigate("/table");
    }
  };

  if (!request) {
    return <div>Заявка не найдена</div>;
  }

  return (
    <div className="with-nav">
      <ProjectNav />
      <div className="form-wrapper">
        <div className="container-fluid">
          <div className="row justify-content-between align-items-center">
            <div className="col">
              <div className="admin-heading-1">Работа с заявкой</div>
            </div>
            <div className="col text-right">
              <Link to="/table" className="btn btn-link">
                Вернуться назад
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <form onSubmit={handleSubmit}>
                <div className="card mb-4">
                  <div className="card-header">Данные о заявке</div>
                  <div className="card-body">
                    <div className="row mb-3">
                      <div className="col-md-2">
                        <strong>ID:</strong>
                      </div>
                      <div className="col">
                        Заявка №<span id="number">{request.id}</span>
                      </div>
                      <input name="id" type="hidden" value={request.id} />
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-2">
                        <strong>Дата создания:</strong>
                      </div>
                      <div className="col" id="date">
                        {request.date}
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-2">
                        <strong>Продукт:</strong>
                      </div>
                      <div className="col">
                        <select
                          name="product"
                          value={formData.product}
                          onChange={handleChange}
                          className="custom-select"
                        >
                          <option value="course-html">Курс по верстке</option>
                          <option value="course-js">Курс по JavaScript</option>
                          <option value="course-vue">Курс по VUE JS</option>
                          <option value="course-php">Курс по PHP</option>
                          <option value="course-wordpress">
                            Курс по WordPress
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-2">
                        <strong>Имя:</strong>
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-2">
                        <strong>Email:</strong>
                      </div>
                      <div className="col">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-2">
                        <strong>Телефон:</strong>
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-2">
                        <strong>Статус заявки:</strong>
                      </div>
                      <div className="col">
                        <select
                          name="status"
                          value={formData.status}
                          onChange={handleChange}
                          className="custom-select"
                        >
                          <option value="new">Новая</option>
                          <option value="inwork">В работе</option>
                          <option value="complete">Завершена</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row justify-content-between">
                  <div className="col">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={handleDelete}
                    >
                      Удалить заявку
                    </button>
                  </div>
                  <div className="col text-right">
                    <button type="submit" className="btn btn-primary">
                      Сохранить изменения
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
