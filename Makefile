FRONTEND_DIR = frontend
BACKEND_DIR = backend

install:
	@echo "Installing backend dependencies"
	cd backend && npm install
	@echo "Installing frontend dependencies"
	cd frontend && npm install
	@echo "All dependencies have been installed"

build-frontend:
	@echo "Building the frontend"
	cd frontend && npm run build

run-frontend:
	@echo "Running frontend"
	cd frontend && npm run dev -- --port 3000

clean:
	@echo "Cleanning node modules"
	rm -rf $(BACKEND_DIR)/node_modules
	rm -rf $(FRONTEND_DIR)/node_modules
	@echo "Clean up complete"