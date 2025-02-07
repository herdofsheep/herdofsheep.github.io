act: ## test the workflow actions locally
	act push \
		--container-architecture linux/amd64 \
		-s GITHUB_TOKEN="$(gh auth token)" \


exec: ## open a bash terminal on the (running) dev docker image
	docker exec -it $(shell docker ps -q --filter "ancestor=catthehacker/ubuntu:act-latest") bash
