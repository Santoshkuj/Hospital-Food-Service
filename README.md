# Hospital-Food-Service
Key Features:
1. Hospital Food Manager Functionality:

Role:

Hospital Food Management Admin.

Manage patient details:

Patient Name
Diseases
Allergies
Room Number
Bed Number
Floor Number
Age
Gender
Contact Information
Emergency Contact
Others (Feel Free to Add More Details)
Create food/diet charts for patients:

Morning, Evening, and Night meal plans.
Specify ingredients for each meal.
Include specific instructions (e.g., "no salt," "low sugar").
Manage inner pantry:

Input pantry details (Staff Name, Contact Info, Location).
Assign food preparation and delivery tasks to specific pantry staff.
Track meal preparation and delivery:

Monitor the preparation status of each meal.
Track delivery statuses for Morning, Evening, and Night meals.
2. Inner Pantry Functionality:

Manage food preparation tasks:

View assigned meal preparation tasks from the hospital food manager.
Update the preparation status for individual meals.
Manage delivery personnel:

Add delivery personnel details (Name, Contact Info, Other Details).
Assign specific meal boxes to delivery personnel.
Track meal deliveries:

Include details of each meal box (Patient Information, Room Number, Diet Chart Details).
Allow delivery personnel to mark a meal box as "Delivered" via the pantry portal.
Ensure delivery status updates are visible to the Hospital Food Manager and Pantry Staff.
3. Delivery Personnel Functionality:

Mark deliveries as completed:

Login to the pantry portal.
View assigned meal boxes with patient and delivery details.
Mark deliveries as "Done" upon successful delivery to patient rooms.
Include timestamps and optional delivery notes.
4. Dashboards:

Hospital Food Manager Dashboard:

Track all food deliveries.
View patient details and diet charts.
Monitor pantry performance and meal delivery statuses.
Receive alerts for delayed deliveries or issues in preparation.
Inner Pantry Dashboard:

Monitor all meal preparation and delivery tasks.
Manage delivery personnel and assigned meal boxes.
View delivery statuses and real-time updates.
Requirements:
Backend:
1. API Development:

Develop RESTful APIs for:

Implement authentication (JWT or OAuth).
CRUD operations for managing patient details.
CRUD operations for managing food/diet charts.
Assigning tasks to the inner pantry.
Marking deliveries as complete.
2. Database:

Design a database structure to store the following:

Patient details.
Food/diet chart details.
Delivery details and statuses.
Pantry staff and delivery personnel details.
Frontend:
Create dashboards for:

Hospital Food Manager.
Inner Pantry Staff.
Ensure a responsive and user-friendly design.

Implement forms for:

Adding/Editing patient details.
Creating and assigning food/diet charts.
