import { toast } from '@/components/ui/use-toast';
import axios from 'axios';

// Create axios instance with base URL
const api = axios.create({
  baseURL: import.meta.env.DEV ? 'http://localhost:5000/api' : 'https://smart-contract-copilot.onrender.com/api',
});

// Add request interceptor to add token to headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Clear token and redirect to login if unauthorized
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// This is a placeholder - replace with actual MongoDB connection when deploying
export interface CanvasData {
  id?: string;
  name: string;
  nodes: any[];
  edges: any[];
  moveCode?: string;
  createdAt?: Date;
  updatedAt?: Date;
  user?: string;
}

export async function saveCanvas(canvasData: CanvasData): Promise<string | null> {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      toast({
        title: "Authentication required",
        description: "Please log in to save your canvas.",
        variant: "destructive",
      });
      return null;
    }

    const response = await api.post('/canvas', canvasData);
    const savedCanvas = response.data;

    if (!savedCanvas._id) {
      throw new Error('Failed to save canvas: No ID returned');
    }

    toast({
      title: "Canvas saved",
      description: "Your canvas has been saved successfully.",
    });
    return savedCanvas._id;
  } catch (error: any) {
    console.error('Error saving canvas:', error);
    toast({
      title: "Error saving canvas",
      description: error.response?.data?.message || "There was a problem saving your canvas.",
      variant: "destructive",
    });
    return null;
  }
}

export async function getCanvasList(): Promise<CanvasData[]> {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      toast({
        title: "Authentication required",
        description: "Please log in to view your canvases.",
        variant: "destructive",
      });
      return [];
    }

    const response = await api.get('/canvas');
    return response.data.map((canvas: any) => ({
      ...canvas,
      id: canvas._id,
      moveCode: canvas.moveCode || ''
    }));
  } catch (error: any) {
    console.error('Error getting canvas list:', error);
    toast({
      title: "Error loading canvases",
      description: error.response?.data?.message || "There was a problem loading your saved canvases.",
      variant: "destructive",
    });
    return [];
  }
}

export async function getCanvas(id: string): Promise<CanvasData | null> {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      toast({
        title: "Authentication required",
        description: "Please log in to load your canvas.",
        variant: "destructive",
      });
      return null;
    }

    const response = await api.get(`/canvas/${id}`);
    const canvas = response.data;

    if (!canvas || !canvas._id) {
      throw new Error('Invalid canvas data received');
    }

    return {
      ...canvas,
      id: canvas._id,
      moveCode: canvas.moveCode || ''
    };
  } catch (error: any) {
    console.error('Error getting canvas:', error);
    toast({
      title: "Error loading canvas",
      description: error.response?.data?.message || "There was a problem loading your canvas.",
      variant: "destructive",
    });
    return null;
  }
}

export async function updateCanvas(id: string, canvasData: CanvasData): Promise<boolean> {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      toast({
        title: "Authentication required",
        description: "Please log in to update your canvas.",
        variant: "destructive",
      });
      return false;
    }

    const response = await api.put(`/canvas/${id}`, canvasData);
    
    if (!response.data || !response.data._id) {
      throw new Error('Failed to update canvas: Invalid response');
    }

    toast({
      title: "Canvas updated",
      description: "Your canvas has been updated successfully.",
    });
    return true;
  } catch (error: any) {
    console.error('Error updating canvas:', error);
    toast({
      title: "Error updating canvas",
      description: error.response?.data?.message || "There was a problem updating your canvas.",
      variant: "destructive",
    });
    return false;
  }
}

export async function deleteCanvas(id: string): Promise<boolean> {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      toast({
        title: "Authentication required",
        description: "Please log in to delete your canvas.",
        variant: "destructive",
      });
      return false;
    }

    await api.delete(`/canvas/${id}`);

    toast({
      title: "Canvas deleted",
      description: "Your canvas has been deleted successfully.",
    });
    return true;
  } catch (error) {
    console.error('Error deleting canvas:', error);
    toast({
      title: "Error deleting canvas",
      description: "There was a problem deleting your canvas.",
      variant: "destructive",
    });
    return false;
  }
}
