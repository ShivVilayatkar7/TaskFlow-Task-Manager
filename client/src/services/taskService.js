import API from "./api";

export const getTasks = async (token) => {
  const { data } = await API.get("/tasks", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const createTask = async (task, token) => {
  const { data } = await API.post("/tasks", task, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const updateTask = async (id, task, token) => {
  const { data } = await API.put(
    `/tasks/${id}`,
    task,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};

export const deleteTask = async (id, token) => {
  const { data } = await API.delete(
    `/tasks/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};