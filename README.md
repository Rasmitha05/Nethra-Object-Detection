# Nethra-Object-Detection

Nethra-Object-Detection is an automated classroom attendance system that utilizes a Convolutional Neural Network (CNN) model to count the number of students present in a classroom environment. The system compares the predicted count with the actual count to ensure accuracy.

## 🌟 Features

- **Automated Attendance Counting:** Accurately counts the number of students present in the classroom.
- **CNN-Based Model:** Employs a custom-built Convolutional Neural Network for object detection and counting.
- **Performance Metrics:** Provides total count, predicted count, and original count for validation.

## 🛠️ Tech Stack

- **Programming Language:** Python
- **Machine Learning Framework:** TensorFlow/Keras (Specify if used)
- **Libraries:** OpenCV, NumPy, Pandas (Include any other relevant libraries)

## 🚀 Installation

To set up the Nethra-Object-Detection system on your local machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Rasmitha05/Nethra-Object-Detection.git
2. Navigate to the project directory:
   cd Nethra-Object-Detection
3. Create and activate a virtual environment (optional but recommended):
   python -m venv venv
   source venv/bin/activate  # On Windows, use 'venv\Scripts\activate'
5. Install the required packages:
   pip install -r requirements.txt
6. Run the application:
   python main.py
📌 Usage
Prepare Input Data: Ensure that the classroom images are available in the specified input directory.

Run the Detection: Execute the main script to process the images and count the number of students.

View Results: The system will output the total count, predicted count, and original count for each image.
