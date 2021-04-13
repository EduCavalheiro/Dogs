module.exports = {
  // Nos modulos
  module: {
    // Aplique as seguintes regras
    rules: [
      {
        // Nos arquivos que terminam ($) com .js
        test: /\.js$/,
        // Nao procure nada em node_modules
        exclude: /node_modules/,
        // Use o seguinte:
        use: {
          // Babel
          loader: "babel-loader",
          // Com as opcoes padroes para o React
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },
};
