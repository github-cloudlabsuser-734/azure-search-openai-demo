# Backend Application

This is the backend application for the Azure Search OpenAI Chat Web App.

## Setup

To set up the backend application, follow these steps:

1. Install the required Python packages by running `pip install -r requirements.txt`.
2. Set the necessary environment variables. Refer to the [Environment Variables](#environment-variables) section for more details.

## Environment Variables

The backend application requires the following environment variables:

- `AZURE_STORAGE_ACCOUNT`: The name of your Azure Storage account.
- `AZURE_STORAGE_CONTAINER`: The name of your Azure Storage container.
- `AZURE_SEARCH_INDEX`: The name of your Azure Search index.
- `AZURE_SEARCH_SERVICE`: The name of your Azure Search service.

## Running the Application

To run the application, use the following command:

```sh
python3 -m gunicorn main:app --bind