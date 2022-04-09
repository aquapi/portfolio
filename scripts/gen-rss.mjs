import { promises as fs } from 'fs';
import { join, resolve } from 'path';
import RSS from 'rss';
import matter from 'gray-matter';

// Remake the __dirname property
const __dirname = resolve("./scripts");

const feed = new RSS({
	title: 'Revenity',
	site_url: 'https://portfolio-aquapi.vercel.app',
	feed_url: 'https://portfolio-aquapi.vercel.app/feed.xml'
});

// Read all the posts
const posts = await fs.readdir(join(__dirname, '..', 'pages', 'posts'));

await Promise.all(
	posts.map(async name => {
		// Skip index.md
		if (name.startsWith('index.')) return;

		// Post content
		const content = await fs.readFile(
			join(__dirname, '..', 'pages', 'posts', name)
		);
		const frontmatter = matter(content);

		// Add the post to the feed
		feed.item({
			title: frontmatter.data.title,
			url: '/posts/' + name.replace(/\.mdx?/, ''),
			date: frontmatter.data.date,
			description: frontmatter.data.description,
			categories: frontmatter.data.tag.split(', '),
			author: frontmatter.data.author
		});
	})
);

// Write the feed with converted XML
await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }));
