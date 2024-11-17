import 'express-session';

declare module 'express-session' {
  interface SessionData {
    userId: string;  
    history?: { role: string; content: string }[]; 
  }
}
