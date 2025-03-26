import { Redis } from "@upstash/redis";

// Conectar ao Upstash Redis apenas uma vez
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  const { name, email, answers } = req.body;

  if (!name || !email || !answers) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios!" });
  }

  try {
    // Criar um ID único para cada resposta (baseado no e-mail)
    const quizId = `quiz:${email}`;

    // Salvar no Redis
    await redis.hmset(quizId, {
      name,
      email,
      answers: JSON.stringify(answers),
    });

    return res.status(200).json({ message: "Respostas salvas com sucesso!" });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao salvar no Upstash", details: error.message });
  }}