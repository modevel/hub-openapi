const fs = require("fs");
fs.writeFileSync(
  "generated/typescript-rxjs/package.json",
  `{
  "name": "@${process.argv[2]}",
  "version": "${process.argv[3]}",
  "description": "${process.argv[4]}"
}`,
  {
    encoding: "utf8",
  }
);
