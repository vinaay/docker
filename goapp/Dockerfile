# Stage 1: Build
FROM golang:1.18 AS builder
WORKDIR /app
COPY . .
RUN go build -o app .

# Stage 2: Run
FROM alpine:latest
WORKDIR /app
COPY --from=builder /app .
EXPOSE 8080
CMD ["./app"]