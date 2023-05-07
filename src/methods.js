const { exec } = require("child_process");
const { rl } = require("./interface");

const mappingnetwork = (askQuestion) => {
  rl.question("Qual pasta gostaria de mapear? ", (path) => {
    rl.question("Qual o endereço do servidor? ", (serverPath) => {
      exec(`net use * \\\\${serverPath}\\${path}`, (error, stdout, stderr) => {
        if (stderr) {
          console.log("\n -- Houve um erro ao mapear sua pasta. -- \n");
          askQuestion();
        }
        console.log("\n -- Pasta mapeada com sucesso\n -- ");
        askQuestion();
      });
    });
  });
};

const deletingNetwork = (askQuestion) => {
  rl.question(
    "Qual unidade de rede mapeada gostaria de deletar? ",
    (unithToDelete) => {
      exec(`net use ${unithToDelete}: /delete`, (error, stdout, stderr) => {
        if (stderr) {
          console.log("\n -- Houve um erro ao deletar a unidade. -- \n");
          askQuestion();
        }
        console.log("\n -- Rede deletada com sucesso. -- \n");
        askQuestion();
      });
    }
  );
};

const sharedFolders = (askQuestion) => {
  exec(`net share`, (error, stdout, stderr) => {
    if (stderr) {
      console.log(" -- Houve um erro ao exibir pastas compartilhadas. -- \n");
      askQuestion();
    }
    console.log(stdout);
    askQuestion();
  });
};

const mappedFolders = (askQuestion) => {
  exec(`net use`, (error, stdout, stderr) => {
    if (stderr) {
      console.log(" -- Houve um erro ao exibir pastas mapeadas. -- \n");
      askQuestion();
    }
    console.log(stdout);
    askQuestion();
  });
};

module.exports = {
  mappingnetwork,
  deletingNetwork,
  sharedFolders,
  mappedFolders,
};
