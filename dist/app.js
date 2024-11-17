"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const express_session_1 = __importDefault(require("express-session"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:3002',
    'https://jaiminho-server.onrender.com',
    'https://capes2024-web.vercel.app',
    'capes2024-ba61gpn1i-gustavohlmas-projects.vercel.app',
];
app.use((0, cors_1.default)({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));
app.options('*', (0, cors_1.default)());
// Configuração do express-session
app.use((0, express_session_1.default)({
    secret: process.env.SESSION_SECRET || 'sua-chave-secreta', // Chave secreta para criptografar a sessão
    resave: false, // Evita salvar a sessão se ela não foi modificada
    saveUninitialized: false, // Não salva sessões não inicializadas
    cookie: {
        secure: false, // Mantenha como false se estiver em desenvolvimento (sem HTTPS)
        httpOnly: true, // Garante que o cookie seja acessível apenas pelo servidor
        sameSite: 'lax' // Controle como o cookie é enviado nas requisições entre sites
    } // Ajuste para 'true' em produção com HTTPS
}));
app.use(express_1.default.json());
app.use(routes_1.default);
exports.default = app;
