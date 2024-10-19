# Catalog-Assessment


# Shamir's Secret Sharing - Polynomial Constant Term Finder

This project is a simplified implementation of Shamir's Secret Sharing algorithm, where we are tasked with finding the constant term (`c`) of an unknown polynomial given encoded roots in various bases.

## Project Structure

```
shamir-secret-sharing/
│
├── src/
│   ├── index.js        # Main code file for running the algorithm
│   ├── utils.js        # Utility functions for decoding and interpolation
│
├── data/
│   ├── testcase1.json  # First test case file
│   ├── testcase2.json  # Second test case file
│
├── README.md           # Project setup and usage instructions
├── package.json        # Project metadata and dependencies
```

## Prerequisites

1. **Node.js**: Make sure you have Node.js installed on your system. You can download and install it from [Node.js official website](https://nodejs.org/).
   - To check if Node.js is installed, run:
     ```bash
     node -v
     ```
     It should display a version number if installed.

2. **Git**: You'll need Git to clone the repository and manage your code.

## Steps to Run the Project

Follow these steps to set up and run the project:

### 1. Clone the Repository

First, clone the repository to your local machine using Git.

```bash
git clone https://github.com/your-username/shamir-secret-sharing.git
```

Navigate to the project directory:

```bash
cd shamir-secret-sharing
```

### 2. Install Dependencies

The project does not require any external Node.js packages. However, ensure that Node.js is properly set up.

### 3. Folder Structure

Ensure the folder structure is as follows:

```
shamir-secret-sharing/
│
├── src/
│   ├── index.js        # Main logic file
│   ├── utils.js        # Utility functions (decoding and Lagrange interpolation)
│
├── data/
│   ├── testcase1.json  # Test case 1
│   ├── testcase2.json  # Test case 2
```

### 4. Run the Project

To run the project and solve for the constant term (`c`) for both test cases, use the following command:

```bash
node src/index.js
```

This will execute the code and print the constant term (`c`) for each test case provided in the `data` folder.

Example output:

```
Constant Term (Secret) for testcase1.json: <calculated_value_1>
Constant Term (Secret) for testcase2.json: <calculated_value_2>
```

### 5. Understanding the Code

- **`src/index.js`**: The main entry point that reads the test cases from the `data` folder, decodes the values, and calculates the constant term using Lagrange interpolation.
- **`src/utils.js`**: Contains utility functions for decoding values from different bases and performing Lagrange interpolation to solve for the constant term.
- **`data/testcase1.json` & `data/testcase2.json`**: JSON files containing the test cases. The points provided are in different numerical bases, which are decoded in the code.

## Additional Notes

- The test cases are read from the **`data`** folder.
- The decoded values are used in Lagrange interpolation to compute the constant term of the polynomial.
  
### Example JSON Structure

Each JSON file contains roots in various formats. Example:

```json
{
  "keys": {
    "n": 4,
    "k": 3
  },
  "1": {
    "base": "10",
    "value": "4"
  },
  "2": {
    "base": "2",
    "value": "111"
  },
  "3": {
    "base": "10",
    "value": "12"
  },
  "6": {
    "base": "4",
    "value": "213"
  }
}
```

In this example, the roots are represented in different bases, and the goal is to decode them and use them to find the constant term of the polynomial.

## Troubleshooting

If you encounter any issues such as missing files or incorrect paths, make sure the folder structure is correct and that you're in the right directory when running the commands.
