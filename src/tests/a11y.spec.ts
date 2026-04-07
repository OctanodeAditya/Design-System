import { describe, it, expect } from 'vitest';
import { render } from 'lit';
import { axe } from 'vitest-axe';

describe('WCAG Accessibility Audits', () => {

  // Discover all story files in the components directory
  const stories = import.meta.glob('../components/**/*.stories.ts', { eager: true });

  Object.entries(stories).forEach(([path, storyModule]: [string, any]) => {
    const meta = storyModule.default;
    if (!meta) return;
    
    const componentName = meta.title || path;

    describe(componentName, () => {
      Object.entries(storyModule).forEach(([exportName, story]: [string, any]) => {
        // Skip default export (meta) and nested objects that aren't stories
        if (exportName === 'default' || typeof story !== 'object') return;

        it(`${exportName} story should have no WCAG violations`, async () => {
          const container = document.createElement('div');
          document.body.appendChild(container);

          try {
            // Determine the render function (story-specific or fallback to meta)
            const renderFn = story.render || meta.render;
            const args = { ...(meta.args || {}), ...(story.args || {}) };
            
            if (renderFn) {
              const result = renderFn(args, { argTypes: meta?.argTypes });
              render(result, container);
              
              // Run the axe audit
              const results = await axe(container);
              expect(results).toHaveNoViolations();
            }
          } finally {
            document.body.removeChild(container);
          }
        });
      });
    });
  });
});
