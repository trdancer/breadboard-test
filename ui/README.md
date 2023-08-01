# About

This application aggregates sample part data from different electronics part suppliers
into one useful data type, as provided from the assessment instructions.
# Project Startup

## System Requirements

- Node 18.17.xx and NPM
- Ports available on PC 5000 and 3000

## Getting Started

First, clone this repository onto a machine of your choosing

```
git clone git@github.com:trdancer/breadboard-test.git
```

## Backend Server

First the backend server needs to be started to serve the part data

Navigate to the `backend` directory:

```
breadboard-test$ cd backend
```

Install dependencies:

```
npm i
```

Start server:

```
npm run start
```

The server will now be available on port 5000. You can access the api at `/api/v1/`.

The "parts" API endpoint lives at `/parts/:partNumber`.

## Frontend (Client)

Now we can start the User Interface (client) to view the part data in a neat way.

Navigate to the `ui` directory:

```
breadboard-test$ cd ui
```

Install dependencies:

```
npm i
```

Start UI:

```
npm run start
```

This will automatically start the client in your browser at port 3000.

Alternatively navigate manually to `localhost:3000`.

Search for a part by entering its part number in the search box.