# URL Shortener App

A simple URL shortener application that allows users to shorten long URLs, access them through custom short links, and save frequently used URLs. It consists of a backend API built with Express.js and a frontend built with React and Tailwind CSS.

## Features:

- Shorten long URLs and generate unique short URLs.
- Save and manage frequently used URLs (saved locally on the user's device).
- Responsive UI for mobile and desktop devices.

## Technologies Used:

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB
- **API:** RESTful API for creating and fetching URLs.

## Live Demo:

Check out the live version of the app: [Live URL Shortener](https://shorturl-jaj5.onrender.com)

## API Endpoints:

### 1. **POST** `/api/url/shorten`

**Description:** Shortens a given long URL and stores it in the database.

**Request Body:**

```json
{
  "longUrl": "https://www.example.com"
}
```

**Response:**

```json
{
  "longUrl": "https://www.example.com",
  "shortUrl": "https://short.ly/abc123"
}
```

---

### 2. **GET** `/api/:shortId`

**Description:** Fetch URL with shortId.

**Response:**

```json
{
  "message": "Redirected.",
  "longUrl": "https://www.example.com"
}
```

---

## Conclusion

This URL shortener app allows users to generate short links and manage their saved URLs efficiently. The backend provides easy-to-use API endpoints to interact with the data, and the frontend is designed with a clean, responsive UI using React and Tailwind CSS. Saved URLs are stored locally on the user's device rather than in a database.
