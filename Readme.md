# URL Shortener App

A simple URL shortener application that allows users to shorten long URLs and access them through custom short links. It consists of a backend API built with Express.js and a frontend built with React and Tailwind CSS.

## Features:

- Shorten long URLs and generate unique short URLs.
- View saved URLs in a table format.
- Delete previously saved URLs.
- Responsive UI for mobile and desktop devices.

## Technologies Used:

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB
- **API:** RESTful API for creating, fetching, and deleting URLs.

## API Endpoints:

### 1. **POST** `/api/shorten`

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

### 2. **GET** `/api/urls`

**Description:** Fetch all saved URLs.

**Response:**

```json
[
  {
    "sn": 1,
    "longUrl": "https://www.example.com",
    "shortUrl": "https://short.ly/abc123"
  },
  {
    "sn": 2,
    "longUrl": "https://www.google.com",
    "shortUrl": "https://short.ly/xyz789"
  }
]
```

---

### 3. **DELETE** `/api/urls/:id`

**Description:** Delete a URL by its unique ID.

**Response:**

- **Status 200:** Successfully deleted URL.
- **Status 404:** URL not found.

---

## Conclusion

This URL shortener app allows users to generate short links, view them in a list, and remove them if needed. It’s a simple but powerful tool for managing URLs. The backend provides easy-to-use API endpoints to interact with the data, and the frontend is designed with a clean, responsive UI using React and Tailwind CSS.

## License

This project is licensed under the **MIT License** - see the LICENSE file for details.
