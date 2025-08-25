# My Portfolio Website

This is a my personal portfolio website project built using Python with the Flask framework for the backend and Tailwind CSS for frontend styling. The project is deployed on Vercel.

## Feature

* Home, About, and Experience pages.
* Responsive design using Tailwind CSS.
* Backend built with Flask.
* Configured for deployment on Vercel.

## Requirements

Before you begin, make sure you have installed the following software:

* [Python](https://www.python.org/downloads/) (Version 3.8 or newer)
* [Node.js](https://nodejs.org/en/) (which includes `npm`)
* [Git](https://git-scm.com/downloads/)

## How to Run a Project Locally

1.  **Clone Repository**
    ```bash
    git clone [https://github.com/Triad-0112/nama-repositori-baru-anda.git](https://github.com/Triad-0112/nama-repositori-baru-anda.git)
    cd new-repository-name
    ```

2.  **Setup Backend (Python)**
    * Create and activate a *virtual environment*:
        ```bash
        # Windows
        python -m venv venv
        .\venv\Scripts\activate

        # macOS / Linux
        python3 -m venv venv
        source venv/bin/activate
        ```
    * Install all Python dependencies:
        ```bash
        pip install -r requirements.txt
        ```

3.  **Setup Frontend (Node.js & Tailwind)**
    * Instal semua *dependency* Node.js:
        ```bash
        npm install
        ```

4.  **Run the Development Server**
    * Use Vercel CLI to run a local server that mimics the production environment:
        ```bash
            vercel dev
        ```
    * Open your browser and visit `http://localhost:3000`.

## Project Structure

```
/
├── main.py            # Main Flask application
├── web/
│   ├── static/        # CSS, JS, and image files
│   └── templates/     # HTML template files
├── package.json       # Frontend dependency (Tailwind)
├── requirements.txt   # Backend dependency (Python)
└── tailwind.config.js # Tailwind CSS configuration
```

## Deployment

This project is configured for automatic deployment on [Vercel](https://vercel.com). Every `push` to the `main` branch will automatically trigger a new build and deployment.