import { FeatureProps } from "../types/componentTypes";

export const features: FeatureProps[] = [
  {
    icon: "⚿",
    title: "Install via package manager",
    text: `Install Bootstrap’s source Sass and JavaScript files via npm, RubyGems, Composer, or Meteor. Package managed installs don’t include documentation or our full build scripts. You can also use any demo from our Examples repo to quickly jumpstart Bootstrap projects.`,
    children: (
      <>
        <div className="code-block">
          <code>$ npm install bootstrap@5.3.3</code>
          <button>.</button>
        </div>
        <div className="code-block">
          <code>$ gem install bootstrap -v 5.3.3</code>
          <button>.</button>
        </div>
      </>
    ),
  },
  {
    icon: "",
    title: "",
    text: `Read our installation docs for more info and additional package managers.`,
  },
];