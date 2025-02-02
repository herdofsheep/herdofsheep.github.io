

-include .env

act: ## test the workflow actions locally
	act push \
	--container-architecture linux/amd64
    --var-file .env \
    -s GITHUB_TOKEN="$(gh auth token)" \
    -s ACT=true \