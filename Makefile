FRONTEND_DIR = frontend
BACKEND_DIR = backend

install:
	@echo "Installing backend dependencies"
	cd backend && npm install
	@echo "Installing frontend dependencies"
	cd frontend && npm install
	@echo "All dependencies have been installed"

run-backend:
	@echo "Starting the backend server"
	cd backend && nodemon server.js

build-frontend:
	@echo "Building the frontend"
	cd frontend && npm run build

run-frontend:
	@echo "Running frontend"
	cd frontend && npm run dev -- --port 3000

build-frontend:
	@echo "Building frontend"
	cd frontend && npm run build

start:
	 concurrently "make run-frontend" "make run-backend"

clean:
	@echo "Cleanning node modules"
	rm -rf $(BACKEND_DIR)/node_modules
	rm -rf $(FRONTEND_DIR)/node_modules
	@echo "Clean up complete"