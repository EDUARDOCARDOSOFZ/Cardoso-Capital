import redis from './BancoDeDados.js'; // Importa a conexão com o Redis

// Função assíncrona para testar a conexão
async function testarRedis() {
  await redis.set('foo', 'bar');
  const data = await redis.get('foo');
  console.log('Valor armazenado no Redis:', data);
}

// Executa o teste
testarRedis();
