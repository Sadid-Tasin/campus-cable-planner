FROM debian:bookworm-slim AS build
RUN apt-get update && apt-get install -y --no-install-recommends g++ ca-certificates && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY src/main.cpp src/main.cpp
RUN g++ -std=c++20 -O2 src/main.cpp -o campus-cable-planner

FROM debian:bookworm-slim
WORKDIR /app
COPY --from=build /app/campus-cable-planner ./campus-cable-planner
COPY public ./public
ENV PORT=8080
EXPOSE 8080
CMD ["./campus-cable-planner"]
