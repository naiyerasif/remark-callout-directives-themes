import { defineConfig } from 'astro/config';
import remarkDirective from 'remark-directive';
import remarkCalloutDirectives from '@microflash/remark-callout-directives';
import githubOptions from './src/themes/github/options';
import vitepressOptions from './src/themes/vitepress/options';
import infimaOptions from './src/themes/infima/options';

// https://astro.build/config
export default defineConfig({
    markdown: {
        remarkPlugins: [
            remarkDirective,
            // remarkCalloutDirectives,
            // [remarkCalloutDirectives, githubOptions],
            // [remarkCalloutDirectives, vitepressOptions],
            [remarkCalloutDirectives, infimaOptions],
        ]
    }
});
