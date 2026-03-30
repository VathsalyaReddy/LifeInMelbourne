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

App details
- Home page will have below tabs
1. About Melbourne
2. Near by places to visit
3. Best restaurants
4. Images
5. About

-Best Restaurants 
1. Add more non indian restaurants to the list with best item to try 

-Images
1. Add a folder/storage for images
2. Provide option to upload images for me

