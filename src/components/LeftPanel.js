const LeftPanel = ({ activeStatus, setActiveStatus, requests }) => {
  const newCount = requests.filter((r) => r.status === "new").length;

  return (
    <div className="left-panel blue-skin">
      <div className="left-panel__logo">
        <div className="left-panel__logo-title">CRM заявки</div>
        <div className="left-panel__logo-subtitle">
          учебный проект webcademy
        </div>
      </div>
      <div className="left-panel__user clearfix">
        <div className="left-panel__user-photo">
          <img src="img/avatars/avatar-128.jpg" alt="Avatar" />
        </div>
        <div className="left-panel__user-name">
          Петр <br />
          Васильевич
        </div>
      </div>
      <div className="left-panel__navigation">
        <div className="left-panel__navigation-title">Заявки</div>
        <ul>
          <li>
            <a
              href="#"
              className={activeStatus === "all" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setActiveStatus("all");
              }}
            >
              Все вместе
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeStatus === "new" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setActiveStatus("new");
              }}
            >
              Новые
              <div className="badge" id="badge-new">
                {newCount}
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeStatus === "inwork" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setActiveStatus("inwork");
              }}
            >
              В работе
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeStatus === "complete" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setActiveStatus("complete");
              }}
            >
              Завершенные
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftPanel;
