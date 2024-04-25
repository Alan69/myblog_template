# Django Blog Project

This is a simple blog application built with Django, a high-level Python web framework, and Django REST Framework (DRF) for creating RESTful APIs.

## Features

- User authentication and authorization
- CRUD operations for managing blog posts, categories, and authors
- Integration with Django admin panel
- API endpoints for accessing blog data

## Setup

1. Clone the repository:

```bash
git clone https://github.com/Alan69/myblog_template
cd myblog_template
```

2. Create a virtual environment and install dependencies:

```bash
python -m venv venv
source venv/bin/activate   # For Unix/macOS
venv\Scripts\activate      # For Windows
pip install -r requirements.txt
```

3. Run migrations to create database tables:

```bash
python manage.py migrate
```

4. Create a superuser account to access the admin panel:

```bash
python manage.py createsuperuser
```

5. Start the Django development server:

```bash
python manage.py runserver
```

6. Access the admin panel in your browser at `http://localhost:8000/admin/` and log in with the superuser account you created.

## React Integration

The project includes a file named `react.js` that serves as a placeholder for integrating React.js components. While this file does not contain a full React codebase, it provides a starting point for users to implement their own React components.

To integrate full React code into the project:

1. Create React components as needed for your frontend UI.
2. Install necessary dependencies using npm or yarn.
3. Configure React Router for client-side routing.
4. Use Axios or Fetch API for making HTTP requests to the Django backend.
5. Replace or modify the `react.js` file to import and render your React components.
