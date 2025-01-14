const baseURL = "http://localhost:3000";

export const activitiesService = {
  async getProducts() {
    try {
      const response = await fetch(`${baseURL}/activities`);
      if (!response.ok) {
        throw new Error("Error to obtain activities");
      }
      const allActivities = await response.json();
      return allActivities;
    } catch (error) {
      console.error("Error getting activities:", error);
      throw error;
    }
  },
  async getActivity(id) {
    try {
      const response = await fetch(`${baseURL}/activities/${id}`);
      if (!response.ok) {
        throw new Error("Error getting activity");
      }
      const activity = await response.json();
      return activity;
    } catch (error) {
      console.error("Error getting activity:", error);
      throw error;
    }
  },
  async createActivity(newActivity) {
    try {
      await fetch(`${baseURL}/activities`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newActivity),
      });
    } catch (error) {
      console.error("Error creating activity:", error);
      throw error;
    }
  },
  async deleteActivity(id) {
    try {
      await fetch(`${baseURL}/activities/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Error deleting activity:", error);
      throw error;
    }
  },
  async updateActivity(id, updatedActivity) {
    try {
      await fetch(`${baseURL}/activities/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedActivity),
      });
    } catch (error) {
      console.error("Error updating activity:", error);
      throw error;
    }
  },
};
