import MarkdownWrapper from '@/components/wrappers/MarkdownWrapper';
import ProjectWrapper from '@/components/wrappers/ProjectWrapper';
import { loadMarkdown } from '@/utils/functions';

const stack = [
  'Figma',
  'Next.js',
  'Nest.js',
  'Zod',
  'Redux Toolkit',
  'TailwindCSS',
  'Shadcn',
  'OAuth',
  'Stripe',
  'aws',
  'Vercel',
];

const contributors = [
  {
    fullName: 'Nehemie Mombanga',
    linkedInUrl: 'https://www.linkedin.com/in/nehemie-mombanga',
    imageUrl:
      'https://utfs.io/f/35860e83-5268-44f8-bd9e-59e17129c36f-mib5ei.png',
  },
];

/**
 * The Aixela project page
 * @returns The Aixela project page component
 */
const Aixela = async () => {
  const markdownContent = await loadMarkdown('docs/aixela/main.md');

  return (
    <ProjectWrapper
      imageUrl="https://utfs.io/f/cc7e3281-5168-49b2-97e0-fd153878a78a-34dhop.png"
      title="Aixela"
      stack={stack}
      creationDate="Jul 9, 2024"
      contributors={contributors}
      liveUrl="https://aixela.vercel.app/"
      githubUrl="https://github.com/NehemieMbg/aixela"
      figmaUrl="https://www.figma.com/design/EsGwpbqPb4qGhzyrY7SSDV/Aixela-App?node-id=0-1&t=wrP9keoJq7MkUk4U-1"
    >
      <MarkdownWrapper content={markdownContent} />
    </ProjectWrapper>
  );
};
export default Aixela;
