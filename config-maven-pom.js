const fs = require("fs");
let pomXml = fs.readFileSync("generated/spring/pom.xml", {
  encoding: "utf8",
});
console.log(pomXml);

pomXml = pomXml.replace(
  /<\/build>/,
  ` <plugins><plugin>
  <groupId>org.apache.maven.plugins</groupId>
  <artifactId>maven-source-plugin</artifactId>
  <version>3.2.0</version>
  <executions>
    <execution>
      <id>attach-sources</id>
      <goals>
        <goal>jar</goal>
      </goals>
    </execution>
  </executions>
  </plugin></plugins>
  </build>`
);
pomXml = pomXml.replace(
  /<\/project>/,
  `  <distributionManagement>
    <repository>
      <id>github</id>
      <name>GitHub OWNER Apache Maven Packages</name>
      <url>https://maven.pkg.github.com/${process.argv[2]}/${process.argv[3]}</url>
    </repository>
  </distributionManagement>
</project>`
);
fs.writeFileSync("generated/spring/pom.xml", pomXml, {
  encoding: "utf8",
});
