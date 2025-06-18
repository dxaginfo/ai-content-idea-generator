# AI Content Idea Generator

A web application that leverages artificial intelligence to generate engaging content ideas for blog posts, videos, and social media.

## Overview

The AI Content Idea Generator helps content creators, marketers, and social media managers overcome creative blocks by providing AI-powered content ideas tailored to their industry, audience, and goals.

### Key Features

- **Topic Research**: Generate relevant topic ideas based on industry, target audience, and current trends
- **Trending Analysis**: Identify popular and emerging topics in your niche
- **Keyword Optimization**: Discover high-performing keywords to incorporate into your content
- **Content Calendar Planning**: Organize and schedule your content ideas for consistent publishing

## Target Audience

- Content marketers
- Bloggers
- Social media managers
- Digital marketing agencies
- Content creation teams

## Technology Stack

- **Frontend**: React.js, Material UI
- **Backend**: Node.js, Express
- **AI Integration**: OpenAI API (GPT-4)
- **Database**: MongoDB
- **Hosting**: Vercel (Frontend), Heroku (Backend)
- **Authentication**: Auth0

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 8.x or higher
- MongoDB account
- OpenAI API key

### Installation

1. Clone the repository
   ```
   git clone https://github.com/dxaginfo/ai-content-idea-generator.git
   cd ai-content-idea-generator
   ```

2. Install dependencies
   ```
   # Install backend dependencies
   cd server
   npm install
   
   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. Set up environment variables
   ```
   # Backend (.env file in server directory)
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   OPENAI_API_KEY=your_openai_api_key
   
   # Frontend (.env file in client directory)
   REACT_APP_API_URL=http://localhost:5000/api
   ```

4. Start the development servers
   ```
   # Start backend server
   cd server
   npm run dev
   
   # Start frontend server
   cd ../client
   npm start
   ```

## Project Roadmap

- **Phase 1**: Basic idea generation for blog posts
- **Phase 2**: Add video and social media content generation
- **Phase 3**: Implement trending analysis and keyword optimization
- **Phase 4**: Add content calendar planning features
- **Phase 5**: Implement AI-powered content performance predictions

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- OpenAI for providing the GPT API
- The content marketing community for inspiration