# Customer Form and CRM Push Components

## Overview

The `CustomerForm` and `CRMpush` components are part of a React application designed for capturing customer information and pushing it to a CRM system.

- **`CustomerForm`**: Provides a form for entering customer details such as name, email, phone number, address, city, state, pincode, and organization. Submits the data to a backend API and redirects to the CRM push page upon successful submission.

- **`CRMpush`**: Fetches and displays the customer data based on the ID received from the URL state. Provides a button to push the customer data to a CRM system (functionality to be implemented).

## Features

- **Customer Form**:
  - Captures various customer details.
  - Sends a POST request to create a new customer record.
  - Redirects to the CRM push page upon successful submission.

- **CRM Push**:
  - Fetches customer data based on ID.
  - Displays customer information in a table format.
  - Includes a button to push data to a CRM system (functionality to be implemented).

## Dependencies

- `react`: 18.x or higher
- `react-router-dom`: 6.x or higher
- `bootstrap`: 5.x or higher

## Installation

1. Clone the repository or copy the component files into your React project.

2. Ensure you have the necessary dependencies installed. If not, install them using npm or yarn:

    ```bash
    npm install react react-router-dom bootstrap
    ```

    or

    ```bash
    yarn add react react-router-dom bootstrap
    ```

3. Add the components to your React project.

## Usage

### Customer Form

1. Ensure that your backend server is running and accessible at `http://localhost:5000`.

2. Use the `CustomerForm` component in your application. Include it in your routing configuration or another component as needed.

    Example using `react-router-dom`:

    ```jsx
    import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
    import CustomerForm from './CustomerForm';
    import CRMpush from './CRMpush';

    function App() {
      return (
        <Router>
          <Switch>
            <Route path="/" component={CustomerForm} />
            <Route path="/CRMpush" component={CRMpush} />
            {/* Other routes */}
          </Switch>
        </Router>
      );
    }
    ```

3. Navigate to the `/` route to access the form. Upon successful submission, you will be redirected to the `/CRMpush` route with the newly created customer ID.

### CRM Push

1. After submitting the customer form, the `CRMpush` component will automatically be loaded if a valid customer ID is provided.

2. The `CRMpush` component will fetch and display the customer data. It will also provide a button to push the data to a CRM system (functionality to be implemented).

## Styling

Both components use Bootstrap for styling. Ensure Bootstrap is included in your project. If not, you can include it in your `index.html` or install it via npm/yarn:

```bash
npm install bootstrap
```

or

```bash
yarn add bootstrap
```

Include Bootstrap in your project by adding the following line to your `index.js` or `App.js` file:

```jsx
import 'bootstrap/dist/css/bootstrap.min.css';
```

## API Endpoints

- **Customer Form**:
  - **POST** `http://localhost:5000/api/customers`
  
    Creates a new customer record. The request body should contain the customer information.

- **CRM Push**:
  - **GET** `http://localhost:5000/api/customers/:id`

    Fetches customer data by ID. Replace `:id` with the actual customer ID.

## Error Handling

- Alerts are shown in case of errors during form submission or data fetching.
- If the form submission is successful, the user is redirected to the CRM push page with the newly created customer's ID.

## Contributing

If you'd like to contribute to these components or improve them, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to adjust any details according to your project’s needs!