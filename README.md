# Campus Cable Planner — Web Edition

A public-web-ready conversion of the supplied C++ Campus Cable Planner project.

## What is included

- C++ backend/API using the original campus nodes and cable dataset
- Browser dashboard and interactive network map
- Login using the original default credentials: `Name` / `1234`
- Cable Search
- Dijkstra Shortest Path
- Cable Failure & Backup analysis
- IT Technician Dispatch with distance matrix + greedy assignment
- Traffic-aware route checking based on available capacity
- Network data inspection
- Responsive UI for desktop/tablet/mobile
- Dockerfile and Render configuration for public deployment

## Run locally

Requirements: a Linux/macOS environment with a C++20 compiler.

```bash
g++ -std=c++20 -O2 src/main.cpp -o campus-cable-planner
./campus-cable-planner
```

Open `http://localhost:8080`.

## Docker

```bash
docker build -t campus-cable-planner .
docker run --rm -p 8080:8080 campus-cable-planner
```

Open `http://localhost:8080`.

## Public deployment on Render

1. Create a GitHub repository and upload this entire folder.
2. On Render, choose **New → Web Service**.
3. Connect the GitHub repository.
4. Select **Docker** as the runtime (or let Render detect the included Dockerfile).
5. Deploy.
6. Render will provide a public `onrender.com` URL.

The application reads the `PORT` environment variable, so it is compatible with cloud web-service port assignment.

## Notes

The web edition intentionally removes console menus and exposes the underlying algorithms through HTTP endpoints. The original node names, edge lengths, costs, capacities, loads, Dijkstra routing, cable-failure analysis, technician distance/greedy dispatch, and bandwidth filtering are preserved from the supplied project.

This is a demo/academic deployment. The default password is kept only to match the supplied project; change authentication before using the app for real infrastructure.
