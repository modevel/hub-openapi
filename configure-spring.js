const fs = require("fs");
fs.writeFileSync(
  "config/spring.json",
  `{
  "groupId": "online.dipa",
  "artifactDescription": "DiPA - ${process.argv[2]}",
  "scmUrl": "https://github.com/DiPA-Projekt/hub-openapi",
  "hideGenerationTimestamp": true,
  "artifactId": "${process.argv[2]}",
  "artifactVersion": "${process.argv[3]}",
  "apiPackage": "online.dipa.${process.argv[2]}",
  "modelPackage": "online.dipa.${process.argv[2]}",
  "interfaceOnly": true
}`,
  {
    encoding: "utf8",
  }
);
