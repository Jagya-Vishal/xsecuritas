VITE_API_URL=https://your-backend-url.com
   ```

4. Deploy triggers:
   - Enable automatic deploys from your main branch
   - Configure build hooks if needed

### Backend Deployment (Render, Railway, or similar)

1. Choose a hosting provider (Render recommended for easy PostgreSQL setup)
2. Set up environment variables:
   ```
   DATABASE_URL=your-database-url
   SESSION_SECRET=your-session-secret
   FRONTEND_URL=https://your-netlify-url.com
   PORT=5000
   ```

3. Configure build settings:
   - Build command: `cd backend && npm install && npm run build`
   - Start command: `cd backend && npm start`
   - Node version: 20.x

4. Configure your database:
   - Create a new PostgreSQL instance
   - Set up the database URL in your environment variables
   - Run migrations using `npm run db:push`

### Domain Configuration

1. Set up custom domain in Netlify (optional):
   - Go to Site settings > Domain management
   - Add your custom domain
   - Configure DNS settings

2. Update CORS settings:
   - Add your Netlify domain to the backend's CORS configuration
   - Update the frontend API URL to point to your backend


### Local Development

1. Frontend:
   ```bash
   npm install
   npm run dev
   ```

2. Backend:
   ```bash
   cd backend
   npm install
   npm run dev
   ```

### Environment Variables

Frontend (.env):
```
VITE_API_URL=http://localhost:5000
```

Backend (.env):
```
DATABASE_URL=your-database-url
SESSION_SECRET=your-session-secret
FRONTEND_URL=http://localhost:3000
PORT=5000