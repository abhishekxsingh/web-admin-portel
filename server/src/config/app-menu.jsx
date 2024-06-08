import policyConfig from './policy-configuration';

const Menu = [
  {
    slug: 'dashboardRoute',
    icon: "fa fa-solid fa-chart-line",
  },
  {
    slug: 'customersRoute',
    icon: "fa fa-sitemap",
  },
  {
    slug: 'newsRoute',
    icon: "fa-solid fa-newspaper",
  },
  {
    slug: 'newsCategoryList',
    icon: "fa-solid fa-newspaper",
  },
  {
    slug: 'newsTagList',
    icon: "fa-solid fa-newspaper",
  },
  {
    slug: 'usersRoute',
    icon: "fa fa-regular fa-user",
  },
];

const menus = Menu.map((data) => {
  const { slug, icon } = data;

  const { navigation: { name: title }, route, ...config } = policyConfig[slug]

  return { ...config, title, route, icon, path: route };
});

export default menus;
