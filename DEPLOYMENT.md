VITE_API_URL=https://your-backend-url.com
   ```

## Step 2: Backend Deployment (Railway/Render)

1. Database Setup:
   - Create a PostgreSQL database on your chosen platform
   - Save the database connection details

2. Backend Deployment:
   - Deploy backend code to Railway or Render
   - Set environment variables:
   ```
   DATABASE_URL=postgresql://username:password@host:port/database
   SESSION_SECRET=your-secure-random-string
   FRONTEND_URL=https://your-netlify-url.netlify.app
   PORT=5000
   ```
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`

## Step 3: Verify Deployment

1. Frontend (Netlify):
   - Visit your Netlify URL
   - Check if all pages load correctly
   - Verify static assets (images, styles)
   - Test responsive design

2. Backend:
   - Test API endpoints
   - Verify database connections
   - Check authentication flow

3. End-to-end Testing:
   - Register a new user
   - Login with credentials
   - View product catalog
   - Test sample/order functionality


## Troubleshooting Common Issues

### Frontend (Netlify):
1. Build failures:
   - Check Netlify build logs
   - Verify node_modules are being installed
   - Confirm environment variables are set
   - Ensure build command executes in client directory

2. Runtime errors:
   - Check browser console for errors
   - Verify API URL is correct
   - Test CORS configuration

### Backend:
1. Database connection:
   - Verify DATABASE_URL format
   - Check database accessibility
   - Confirm credentials are correct

2. Authentication issues:
   - Verify SESSION_SECRET is set
   - Check CORS settings
   - Confirm cookie settings

## Quick Local Testing

1. Frontend:
```bash
cd client
npm install
npm run dev
```

2. Backend:
```bash
npm install
npm run dev
```

3. Environment Setup:
   Create `.env.local` in client directory:
   ```
   VITE_API_URL=http://localhost:5000
   ```

   Create `.env` in root:
   ```
   DATABASE_URL=your-database-url
   SESSION_SECRET=development-secret
   FRONTEND_URL=http://localhost:3000
   PORT=5000