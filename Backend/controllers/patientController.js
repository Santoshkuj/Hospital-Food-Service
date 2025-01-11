import Patient from "../models/patient.js";

// Create a new patient
export async function createPatient(req, res) {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).json({ message: "Patient created successfully", patient });
  } catch (error) {
    res.status(500).json({ message: "Error creating patient", error });
  }
}

// Get all patients
export async function getAllPatients(req, res) {
  try {
    const patients = await Patient.find({});
    if (patients.length) {
      res.status(200).json({
        success: true,
        patients
      });
    } else {
      res.status(200).json({
        success: true,
        patients : [],
        message: 'No patients in hospital'
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching patients", error });
  }
}

// Get a specific patient by ID
export async function getPatientById(req, res) {
  try {
    const patient = await findById(req.params.id);
    if (!patient) return res.status(404).json({ message: "Patient not found" });
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ message: "Error fetching patient", error });
  }
}

// Update a patient
export async function updatePatient(req, res) {
  try {
    const patient = await findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!patient) return res.status(404).json({ message: "Patient not found" });
    res.status(200).json({ message: "Patient updated successfully", patient });
  } catch (error) {
    res.status(500).json({ message: "Error updating patient", error });
  }
}

// Delete a patient
export async function deletePatient(req, res) {
  try {
    const patient = await findByIdAndDelete(req.params.id);
    if (!patient) return res.status(404).json({ message: "Patient not found" });
    res.status(200).json({ message: "Patient deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting patient", error });
  }
}