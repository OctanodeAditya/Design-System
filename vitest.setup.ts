import { setProjectAnnotations } from '@storybook/web-components';
import * as projectAnnotations from './.storybook/preview';
import { expect } from 'vitest';
import * as axeMatchers from 'vitest-axe/matchers';
import 'vitest-axe/extend-expect';

// Extend Vitest with axe-core matchers (like toHaveNoViolations)
expect.extend(axeMatchers);

// Set Storybook global annotations if needed for testing (like theme, decorators)
setProjectAnnotations(projectAnnotations);
