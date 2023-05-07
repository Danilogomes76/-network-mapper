const { rl } = require("./src/interface");
const {
  deletingNetwork,
  mappedFolders,
  mappingnetwork,
  sharedFolders
} = require("./src/methods");

const askQuestion = () => {
  rl.question(
    "O que gostaria de fazer?\n\n1 - Mapear uma rede\n2 - Deletar uma rede mapeada\n3 - Ver pastas compartilhadas\n4 - Ver pastas mapeadas\n5 - Sair\n\nOpção: ",
    (resposta) => {
      switch (resposta) {
        case "1":
          mappingnetwork(askQuestion);
          break;
        case "2":
          deletingNetwork(askQuestion);
          break;
        case "3":
          sharedFolders(askQuestion);
          break;
        case "4":
          mappedFolders(askQuestion);
          break;
        case "5":
          rl.close();
          break;
        default:
          console.log("\n -- Opção invalida. -- \n");
          askQuestion();
          break;
      }
    }
  );
};

askQuestion();

