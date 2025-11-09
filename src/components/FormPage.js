import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectNav from "./ProjectNav";
import useModel from "./useModel";

const FormPage = () => {
  const { addRequest } = useModel();
  const history = useNavigate();

  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    email: "",
    product: "course-html",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRequest(formData);
    alert("Заявка успешно добавлена!");
    setFormData({
      name: "",
      phone: "",
      email: "",
      product: "course-html",
    });
  };

  const fillTestData = () => {
    setFormData({
      name: "Иван Иванов",
      phone: "+7 (999) 123-45-67",
      email: "test@example.com",
      product: "course-js",
    });
  };

  return (
    <div className="with-nav radial-bg d-flex justify-content-center align-items-center">
      <ProjectNav />
      <div className="white-plate white-plate--payment">
        <div className="container-fluid">
          <div className="white-plate__header text-center">
            <p className="white-plate__logo">
              <span>Форма</span> заявок
            </p>
          </div>
          <div className="white-plate__line-between white-plate__line-between--main"></div>

          <button className="btn btn-secondary mb-3" onClick={fillTestData}>
            Заполнить тестовыми данными
          </button>

          <form onSubmit={handleSubmit}>
            <label>Ваши данные:</label>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Имя и Фамилия"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-control"
                placeholder="Телефон"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="product">Продукт:</label>
              <select
                name="product"
                value={formData.product}
                onChange={handleChange}
                className="form-control"
                id="product"
              >
                <option value="course-html">Курс по верстке</option>
                <option value="course-js">Курс по JavaScript</option>
                <option value="course-vue">Курс по VUE JS</option>
                <option value="course-php">Курс по PHP</option>
                <option value="course-wordpress">Курс по WordPress</option>
              </select>
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Оформить заявку
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default FormPage;
