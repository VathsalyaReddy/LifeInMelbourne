# LifeInMelbourne

A web application built with Angular (frontend) and Python FastAPI (backend).

## Project Structure

```
LifeInMelbourne/
├── frontend/    # Angular application
└── backend/     # Python FastAPI application
```

## Getting Started

### Frontend (Angular)

```bash
cd frontend
npm install
ng serve
```

App runs at `http://localhost:4200`

### Backend (Python / FastAPI)

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

API runs at `http://localhost:8000`

API docs available at `http://localhost:8000/docs`
