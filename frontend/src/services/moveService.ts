// const API_BASE_URL = "http://localhost:5000"; // Change if deployed
const API_BASE_URL = "https://smart-contract-copilot-pr12.onrender.com"; // Change if deployed

// Store Move Code
export const storeMoveCode = async (moveCode: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/move/store`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ moveCode }),
    });

    return await response.json();
  } catch (error) {
    console.error("Error storing Move code:", error);
    return null;
  }
};

// Deploy Move Code
export const deployMoveCode = async (codeId: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/deploy`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ codeId }),
    });

    return await response.json();
  } catch (error) {
    console.error("Error deploying Move code:", error);
    return null;
  }
};
