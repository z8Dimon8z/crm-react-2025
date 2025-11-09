import { useState, useEffect } from "react";

const useModel = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const storedRequests = localStorage.getItem("crm_requests");
    if (storedRequests) {
      try {
        setRequests(JSON.parse(storedRequests));
      } catch (error) {
        console.error("Ошибка парсинга данных из localStorage:", error);
        initializeTestData();
      }
    } else {
      initializeTestData();
    }
  }, []);

  const initializeTestData = () => {
    const testData = [
      {
        id: 1,
        date: "2023-04-20 13:52:13",
        product: "course-html",
        name: "Петр Сергеевич",
        email: "info@inbox.ru",
        phone: "+7 (909) 77-55-777",
        status: "new",
      },
      {
        id: 2,
        date: "2023-04-21 10:22:45",
        product: "course-js",
        name: "Василий Петрович",
        email: "info@gmail.ru",
        phone: "+7 (912) 34-56-789",
        status: "inwork",
      },
      {
        id: 3,
        date: "2023-04-22 15:30:10",
        product: "course-vue",
        name: "Николай Владимирович",
        email: "info@mail.ru",
        phone: "+7 (923) 45-67-890",
        status: "complete",
      },
    ];
    setRequests(testData);
    localStorage.setItem("crm_requests", JSON.stringify(testData));
  };

  useEffect(() => {
    localStorage.setItem("crm_requests", JSON.stringify(requests));
  }, [requests]);

  const addRequest = (request) => {
    const newId =
      requests.length > 0 ? Math.max(...requests.map((r) => r.id)) + 1 : 1;
    const newRequest = {
      ...request,
      id: newId,
      date: new Date().toLocaleString("ru-RU"),
      status: "new",
    };
    setRequests([...requests, newRequest]);
    return newRequest;
  };

  const updateRequest = (id, updatedRequest) => {
    const numericId = Number(id);
    if (isNaN(numericId)) return;

    setRequests(
      requests.map((request) =>
        request.id === numericId ? { ...request, ...updatedRequest } : request
      )
    );
  };

  const deleteRequest = (id) => {
    const numericId = Number(id);
    if (isNaN(numericId)) return;

    setRequests(requests.filter((request) => request.id !== numericId));
  };

  const getRequest = (id) => {
    const numericId = Number(id);
    if (isNaN(numericId)) return null;

    return requests.find((request) => request.id === numericId);
  };

  return {
    requests,
    addRequest,
    updateRequest,
    deleteRequest,
    getRequest,
  };
};

export default useModel;
