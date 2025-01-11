import DietChart from '../models/dietChart.js';

// Create a new diet chart
export async function createDietChart(req, res) {
  try {
    const dietChart = new DietChart(req.body);
    await dietChart.save();
    res.status(201).json(dietChart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Get diet charts for a patient
export async function getDietCharts(req, res) {
  try {
    const dietCharts = await find({ patientId: req.params.patientId });
    res.status(200).json(dietCharts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const getAllDietCharts = async (req, res) => {
    try {
      const dietCharts = await DietChart.find().populate("patientId");
      res.status(200).json(dietCharts);
    } catch (error) {
      res.status(500).json({ message: "Error fetching diet charts", error });
    }
  };
  
  // Get a specific diet chart by ID
  export const getDietChartById = async (req, res) => {
    try {
      const dietChart = await DietChart.findById(req.params.id).populate("patientId");
      if (!dietChart) return res.status(404).json({ message: "Diet chart not found" });
      res.status(200).json(dietChart);
    } catch (error) {
      res.status(500).json({ message: "Error fetching diet chart", error });
    }
  };
  
  // Update a diet chart
  export const updateDietChart = async (req, res) => {
    try {
      const dietChart = await DietChart.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!dietChart) return res.status(404).json({ message: "Diet chart not found" });
      res.status(200).json({ message: "Diet chart updated successfully", dietChart });
    } catch (error) {
      res.status(500).json({ message: "Error updating diet chart", error });
    }
  };
  
  // Delete a diet chart
  export const deleteDietChart = async (req, res) => {
    try {
      const dietChart = await DietChart.findByIdAndDelete(req.params.id);
      if (!dietChart) return res.status(404).json({ message: "Diet chart not found" });
      res.status(200).json({ message: "Diet chart deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting diet chart", error });
    }
  };