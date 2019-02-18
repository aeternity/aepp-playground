module.exports = {
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `
          @import "~@aeternity/aepp-components/src/styles/globals/mixins";
          @import "~@aeternity/aepp-components/src/styles/globals/functions";
          @import "~@aeternity/aepp-components/src/styles/placeholders/typography";
          @import "~@aeternity/aepp-components/src/styles/variables/animations";
          @import "~@aeternity/aepp-components/src/styles/variables/colors";
          @import "~@aeternity/aepp-components/src/styles/variables/paths";
          @import "~@aeternity/aepp-components/src/styles/variables/typography";
        `
      }
    }
  }
}
