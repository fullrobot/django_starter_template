# Define the default behavior of `make` when no target is specified
.DEFAULT_GOAL := help

# Ensure that these targets are not treated as files
.PHONY: install make_db build up migrate down help

# install:
#     poetry shell
#     poetry install
#     pre-commit install

# Target for creating or recreating the database
make_db:
	psql -c 'DROP DATABASE IF EXISTS django_starter_template'
	psql -c 'CREATE DATABASE django_starter_template'

# Target for building Docker containers
build:
	docker compose -f docker-compose.local.yml -f docker-compose.docs.yml build

# Target for starting up Docker containers
up:
	docker compose -f docker-compose.local.yml -f docker-compose.docs.yml up -d

# Target for running migrations
migrate:
	docker compose -f docker-compose.local.yml run --rm django python manage.py makemigrations
	docker compose -f docker-compose.local.yml run --rm django python manage.py migrate

# Target for stopping and removing Docker containers
down:
	docker compose -f docker-compose.local.yml -f docker-compose.docs.yml down

create_superuser:
	docker compose -f docker-compose.local.yml run --rm django python manage.py createsuperuser

# Help target to display usage information
help:
	@echo "Available targets:"
	@echo "  make make_db      : Create or recreate the database"
	@echo "  make build        : Build Docker containers"
	@echo "  make up           : Start up Docker containers"
	@echo "  make migrate      : Run database migrations"
	@echo "  make down         : Stop and remove Docker containers"

# Catch and print a message for undefined targets
%:
	@true
