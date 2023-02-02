import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), 'src/posts');

function getMarkdownsFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getPost(slugOrFilename: string, fields: string[] = []) {
  // Remover o .md do fim do arquivo
  const slug = slugOrFilename.replace(/\.md$/, '');

  // Buscando pelo nome do arquivo markdown, com o .md
  const directory = join(postsDirectory, `${slug}.md`);

  // Ler o conteúdo do arquivo markdown
  const fileContents = fs.readFileSync(directory, 'utf8');
  /**
   * Buscar o seu conteúdo
   * Com o matter, o cabeçalho do Markdown
   * vem na chave data, e o conteúdo, dentro
   * do content.
   */
  const { data, content } = matter(fileContents);

  const post: { [key: string]: string } = {};

  /**
   * Faremos um loop dentro dos campos necessários
   * para preencher nosso objeto post.
   */
  fields.forEach((field) => {
    // Se houver o campo conteúdo, o adicionamos
    if (field === 'content') post[field] = content;
    // Se houver o campo slug, o adicionamos
    if (field === 'slug') post[field] = slug;
    /**
     * Se houver o campo dentro do cabeçalho do
     * markdown, o adicionamos no post
     */
    if (data[field]) post[field] = data[field];
  });

  /**
   * Retornamos o nosso post filtrado
   */
  return post;
}

/**
 * Criamos uma função para buscar
 * todos os posts. Exportamos também
 * para consegir buscar de dentro da página
 * de listagem de posts
 */
export function getAllPosts(fields: string[]) {
  /**
   * Utilizamos a nossa função para
   * retornar um array com os nomes
   * dos markdowns que temos.
   */
  const slugs = getMarkdownsFiles();

  /**
   * Criamos uma map (um loop em cada
   * índice do array de slugs, que irá nos
   * retornar outro array) que chama uma
   * função para cada slug buscando detalhes
   * do post.
   */
  const posts = slugs.map((slug) => getPost(slug, fields));
  // .sort((a, b) => new Date(b.date) - new Date(a.date));

  /**
   * Retornamos o post com
   * seus respectivos detalhes.
   */
  return posts;
}
