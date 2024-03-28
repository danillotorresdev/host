export const githubBaseAPI = async (path: string) => {
  const response = await fetch(`https://api.github.com/${path}`, {
    headers: {
      Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Erro ao acessar a API do GitHub: ${response.status}`);
  }

  return response.json();
};
