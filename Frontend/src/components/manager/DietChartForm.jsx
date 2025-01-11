import { Form, Input, Button, Select } from 'antd';
import { useState, useEffect } from 'react';

const DietChartForm = ({ onSubmit, initialValues = {}, patients = [] }) => {
  const [form] = Form.useForm();
  const [selectedPatient, setSelectedPatient] = useState(initialValues.patientId || '');
  const [ingredients, setIngredients] = useState({
    morning: initialValues.morningIngredients || [],
    evening: initialValues.eveningIngredients || [],
    night: initialValues.nightIngredients || [],
  });
  const [ingredientInput, setIngredientInput] = useState(''); // Manage the input field for adding ingredients
  const [activeMeal, setActiveMeal] = useState(null); // Track which meal's ingredients are being added

  useEffect(() => {
    form.setFieldsValue({
      patientId: selectedPatient,
      morningMeal: initialValues.morningMeal,
      eveningMeal: initialValues.eveningMeal,
      nightMeal: initialValues.nightMeal,
      specialInstructions: initialValues.specialInstructions,
    });
  }, [initialValues, form, selectedPatient]);

  const handleSubmit = (values) => {
    // Add the selectedPatient and ingredients to the values
    const finalValues = {
      ...values,
      patientId: selectedPatient,
      morningIngredients: ingredients.morning,
      eveningIngredients: ingredients.evening,
      nightIngredients: ingredients.night,
    };
    onSubmit(finalValues); // Call the onSubmit prop to handle form submission
    form.resetFields(); // Reset the form after submission
  };

  const handlePatientChange = (value) => {
    setSelectedPatient(value); // Update selected patient
  };

  const handleIngredientInputChange = (e) => {
    setIngredientInput(e.target.value); // Update ingredient input
  };

  const addIngredient = () => {
    if (ingredientInput.trim()) {
      const newIngredients = ingredientInput
        .split(',')
        .map((ingredient) => ingredient.trim())
        .filter((ingredient) => ingredient); // Split by comma, trim whitespace, and filter empty values

      setIngredients((prev) => {
        const updatedIngredients = { ...prev };
        updatedIngredients[activeMeal] = [
          ...updatedIngredients[activeMeal],
          ...newIngredients,
        ];
        return updatedIngredients;
      });

      setIngredientInput(''); // Reset input field after adding
    }
  };

  const handleActiveMealChange = (meal) => {
    setActiveMeal(meal); // Set which meal ingredients are being added
  };

  const displayIngredients = (meal) => {
    return ingredients[meal].join(', '); // Join ingredients with comma for display
  };

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={initialValues}
      onFinish={handleSubmit}
    >
      {/* Patient Selector */}
      <Form.Item
        label="Select Patient"
        name="patientId"
        rules={[{ required: true, message: 'Please select a patient!' }]}
      >
        <Select
          placeholder="Select a patient"
          onChange={handlePatientChange}
          value={selectedPatient}
        >
          {patients.map((patient) => (
            <Select.Option key={patient._id} value={patient._id}>
              {patient.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      {/* Morning Meal */}
      <Form.Item label="Morning Meal" name="morningMeal" rules={[{ required: true }]}>
        <Input placeholder="Enter morning meal details" />
      </Form.Item>

      {/* Morning Ingredients */}
      <Form.Item label="Morning Ingredients">
        <div>
          <div>{displayIngredients('morning')}</div> {/* Display ingredients as comma-separated */}
          {activeMeal === 'morning' && (
            <>
              <Input
                value={ingredientInput}
                onChange={handleIngredientInputChange}
                placeholder="Enter ingredients (comma separated)"
                style={{ marginBottom: '8px' }}
              />
              <Button type="dashed" onClick={addIngredient}>
                Add Ingredients
              </Button>
            </>
          )}
          <Button type="link" onClick={() => handleActiveMealChange('morning')}>
            Add Ingredient to Morning
          </Button>
        </div>
      </Form.Item>

      {/* Evening Meal */}
      <Form.Item label="Evening Meal" name="eveningMeal" rules={[{ required: true }]}>
        <Input placeholder="Enter evening meal details" />
      </Form.Item>

      {/* Evening Ingredients */}
      <Form.Item label="Evening Ingredients">
        <div>
          <div>{displayIngredients('evening')}</div> {/* Display ingredients as comma-separated */}
          {activeMeal === 'evening' && (
            <>
              <Input
                value={ingredientInput}
                onChange={handleIngredientInputChange}
                placeholder="Enter ingredients (comma separated)"
                style={{ marginBottom: '8px' }}
              />
              <Button type="dashed" onClick={addIngredient}>
                Add Ingredients
              </Button>
            </>
          )}
          <Button type="link" onClick={() => handleActiveMealChange('evening')}>
            Add Ingredient to Evening
          </Button>
        </div>
      </Form.Item>

      {/* Night Meal */}
      <Form.Item label="Night Meal" name="nightMeal" rules={[{ required: true }]}>
        <Input placeholder="Enter night meal details" />
      </Form.Item>

      {/* Night Ingredients */}
      <Form.Item label="Night Ingredients">
        <div>
          <div>{displayIngredients('night')}</div> {/* Display ingredients as comma-separated */}
          {activeMeal === 'night' && (
            <>
              <Input
                value={ingredientInput}
                onChange={handleIngredientInputChange}
                placeholder="Enter ingredients (comma separated)"
                style={{ marginBottom: '8px' }}
              />
              <Button type="dashed" onClick={addIngredient}>
                Add Ingredients
              </Button>
            </>
          )}
          <Button type="link" onClick={() => handleActiveMealChange('night')}>
            Add Ingredient to Night
          </Button>
        </div>
      </Form.Item>

      {/* Special Instructions */}
      <Form.Item label="Special Instructions" name="specialInstructions">
        <Input.TextArea placeholder="Enter any special instructions" />
      </Form.Item>

      {/* Submit Button */}
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};

export default DietChartForm;
