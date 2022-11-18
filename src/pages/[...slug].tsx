import fs from 'fs';
import matter from 'gray-matter';
import yaml from 'js-yaml';
import ReactMarkdown from 'react-markdown';
import { Heading, Stack } from '@chakra-ui/react';
import MDXComponents from '../components/';
import { ParsedUrlQuery } from 'querystring';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { DocsNav } from '../components/UI/docs';

import { getFileList } from '../utils';

const MATTER_OPTIONS = {
  engines: {
    yaml: (s: any) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object
  }
};

// This method crawls for all valid docs paths
export const getStaticPaths: GetStaticPaths = () => {
  const paths: string[] = getFileList('docs'); // This is folder that get crawled for valid docs paths. Change if this path changes.

  return {
    paths,
    fallback: false
  };
};

// Reads file data for markdown pages
export const getStaticProps: GetStaticProps = async context => {
  const paths: string[] = getFileList('docs'); // This is folder that get crawled for valid docs paths. Change if this path changes.
  const { slug } = context.params as ParsedUrlQuery;
  const filePath = (slug as string[])!.join('/');
  let file;

  try {
    file = fs.readFileSync(`${filePath}.md`, 'utf-8');
  } catch {
    file = fs.readFileSync(`${filePath}/index.md`, 'utf-8');
  }

  const { data: frontmatter, content } = matter(file, MATTER_OPTIONS);

  return {
    props: {
      frontmatter,
      content,
      paths
    }
  };
};

interface Props {
  frontmatter: {
    [key: string]: string;
  };
  content: string;
  paths: string[];
}

const DocPage: NextPage<Props> = ({ frontmatter, content, paths }) => {
  return (
    <>
      <main>
        <Stack>
          <DocsNav paths={paths} />
        </Stack>
        <Stack py={8} px={4}>
          <Heading as='h1'>{frontmatter.title}</Heading>

          <ReactMarkdown components={MDXComponents}>{content}</ReactMarkdown>
        </Stack>
      </main>
    </>
  );
};

export default DocPage;
