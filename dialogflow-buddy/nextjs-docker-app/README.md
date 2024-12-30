# Next.js Docker App

This project is a Next.js application containerized using Docker. It includes a main page that displays a grid of features, each represented by a `FeatureCard` component.

## Project Structure

- `src/app/page.tsx`: Main page component of the Next.js application.
- `src/components/FeatureCard.tsx`: Component for displaying individual feature cards.
- `Dockerfile`: Instructions to build the Docker image for the application.
- `.dockerignore`: Specifies files and directories to ignore when building the Docker image.
- `package.json`: Configuration file for npm, listing dependencies and scripts.
- `next.config.js`: Configuration settings for the Next.js application.

## Getting Started

To get started with the application, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd nextjs-docker-app
   ```

2. Build the Docker image:
   ```bash
   docker build -t nextjs-docker-app .
   ```

3. Run the Docker container:
   ```bash
   docker run -p 3000:3000 nextjs-docker-app
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## License

This project is licensed under the MIT License.