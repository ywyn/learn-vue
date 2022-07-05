import Vue from 'vue';

const components = require.context('@/components', true, /\.vue$/);
components.keys().forEach((fileName) => {
  const component = components(fileName).default;
  Vue.component(
    component.name || fileName.replace(/\.\/(.*)\.vue/, '$1'),
    component
  );
});

const directives = require.context('@/directives', false, /\.js$/);
directives.keys().forEach((fileName) => {
  const directive = directives(fileName).default;
  Vue.directive(fileName.replace(/\.\/(.*)\.js/, '$1'), directive);
});

const filters = require.context('@/filters', false, /\.js$/);
filters.keys().forEach((fileName) => {
  const filter = filters(fileName).default;
  Vue.filter(fileName.replace(/\.\/(.*)\.js/, '$1'), filter);
});
